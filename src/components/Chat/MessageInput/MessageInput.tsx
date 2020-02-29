import { faAt, faInfoCircle, faSmile } from '@fortawesome/pro-light-svg-icons';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'antd';
import { RcFile } from 'antd/lib/upload';
import React, { ChangeEvent, FC, KeyboardEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import InputTrigger from 'react-input-trigger';
import TextArea from 'react-textarea-autosize';
import { useClickAway, useMedia } from 'react-use';
import { SuggestionsUser } from '../../../typings/Message';

import { Suggestion } from '../../Suggestion';
import { Tooltip } from '../../Tooltip';
import Typing from '../Typing/Typing';
import Dropdown from './Dropdown';

import styles from './MessageInput.module.scss';

const TipsContent: FC<any> = (props: any) => {
  const { ...restProps } = props;
  return (
    <p className={styles.messageTips} {...restProps}>
      Use <span>@</span> for mentions, <span>/</span> for more options , <span>#</span> for channels | <span>+</span>{' '}
      Add files to share
    </p>
  );
};

export interface Props {
  text?: string;
  showAt?: boolean;
  hintShown?: boolean;
  suggestions: SuggestionsUser[];
  typingUsers?: string[];
  onEnter: (text: string) => void;
  onChange?: (text: string) => void;
  onUpload?: (file: RcFile) => void;
}

export const MessageInput: FC<Props> = (props) => {
  const { showAt, hintShown, suggestions, onEnter, onChange, onUpload, typingUsers } = props;
  const content = props.text ? props.text.replace(/<br\/>/g, '\n') : '';
  const [text, setText] = useState(content);
  const isMobile = useMedia('(max-width: 575px)');

  /** element ref */
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const suggestionsRef = useRef<HTMLDivElement | null>(null);

  /** mention suggestions */
  const [suggestionLeftPos, setSuggestionLeftPos] = useState<number>(0);
  const [suggestionShown, setSuggestionShown] = useState<boolean>(false);
  const [currentSelection, setCurrentSelection] = useState<number>(0);
  const [endHandler, setEndHandler] = useState<() => void>(() => (): any => null);
  const [keyword, setKeyword] = useState<string>('');
  const [startPos, setStartPos] = useState<number>(0);

  useClickAway(suggestionsRef, () => {
    setSuggestionShown(false);
  });

  const handleChange = useCallback(
    (text: string) => {
      setText(text);

      // replace all `\n` `\r` with `<br />`
      const content = text.replace(/\r?\n/g, '<br/>');

      if (onChange) {
        onChange(content);
      }
    },
    [onChange],
  );

  const handleAtClick = () => {
    handleChange(text + '@');
    setSuggestionShown(true);
  };

  /** send message */
  const onReply = () => {
    if (text.trim() !== '') {
      onEnter(text);
      setText('');
    }
  };

  /** handle textarea keydown */
  const onKeyDown = (evt: KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === 'Enter') {
      if (suggestionShown) {
        return;
      }

      if (evt.ctrlKey) {
        if (inputRef && inputRef.current) {
          const pos = inputRef.current?.selectionEnd;
          const newText = text.substring(0, pos) + '\n' + text.substring(pos);
          setText(newText);
        }
      }

      if (evt.shiftKey || evt.ctrlKey) {
        evt.stopPropagation();
      } else {
        evt.preventDefault();
        onReply();
      }
    }
  };

  const reset = useCallback(() => {
    setCurrentSelection(0);
    setSuggestionLeftPos(0);
    setSuggestionShown(false);
    endHandler();
    setStartPos(0);
  }, [endHandler]);

  const toggleSuggestion = (meta: any) => {
    const { hookType, cursor } = meta;

    if (hookType === 'start') {
      setSuggestionShown(true);
      setSuggestionLeftPos(cursor.left);
      setStartPos(cursor.selectionStart);
      setKeyword('');
    }

    if (hookType === 'cancel') {
      reset();
    }
  };

  const handleInput = (meta: any) => {
    const { text } = meta;
    setKeyword(text);
  };

  const done = useCallback(() => {
    const users = suggestions.filter((user: SuggestionsUser) => user.name.toLowerCase().indexOf(keyword) !== -1);
    const user = users[currentSelection];

    if (user) {
      const username = `@${user.name}`;
      const newText =
        `${text.slice(0, startPos > 1 ? startPos - 1 : 0)}` +
        `${username}${text.slice(startPos + username.length, text.length)}`;
      handleChange(newText);
    }
    reset();
  }, [currentSelection, handleChange, suggestions, reset, keyword, text, startPos]);

  const handleKeyDown = (evt: React.KeyboardEvent) => {
    const { which, shiftKey } = evt;

    if (suggestionShown && which === 40) {
      evt.preventDefault();
      setCurrentSelection((currentSelection + 1) % suggestions.length);
    }

    if (suggestionShown && which === 38 && currentSelection > 0) {
      evt.preventDefault();
      setCurrentSelection((currentSelection - 1) % suggestions.length);
    }

    if (which === 13) {
      if (!shiftKey) {
        if (suggestionShown) {
          evt.preventDefault();
          done();
        }
      } else {
        reset();
      }
    }
  };

  const handleSuggestionItemClick = (e: MouseEvent, idx: number) => {
    e.stopPropagation();
    setCurrentSelection(idx);
    done();

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleHover = (e: MouseEvent, idx: number) => {
    e.stopPropagation();
    setCurrentSelection(idx);
  };

  useEffect(() => {
    const range = text.length;

    if (inputRef && inputRef.current) {
      inputRef.current.setSelectionRange(range, range);
    }
  }, [inputRef]);

  const filtered: SuggestionsUser[] = suggestions
    ? suggestions.filter((user: SuggestionsUser) => user.name.toLowerCase().indexOf(keyword) !== -1)
    : [];

  return (
    <Row className={styles.messageInput}>
      <Row type="flex" align="top" className={styles.mentions}>
        <Col style={{ alignItems: 'flex-start', padding: '14px 0' }}>
          {showAt && (
            <span ref={suggestionsRef} className={styles.iconButton} onClick={() => handleAtClick()}>
              <FontAwesomeIcon icon={faAt} style={{ fontSize: 16 }} />
            </span>
          )}
          <span className={styles.iconButton}>
            <FontAwesomeIcon icon={faSmile} />
          </span>
        </Col>
        <Col style={{ flex: 1 }} onKeyDown={handleKeyDown}>
          <InputTrigger
            trigger={{
              keyCode: 50 || 51,
              shiftKey: true,
            }}
            inputRef={() => inputRef}
            onType={(meta: any) => handleInput(meta)}
            style={{ width: '100%', padding: '10px 0' }}
            onStart={(meta: any) => toggleSuggestion(meta)}
            onCancel={(meta: any) => toggleSuggestion(meta)}
            endTrigger={(endHandler: any) => setEndHandler(() => endHandler)}
          >
            <TextArea
              minRows={1}
              value={text}
              inputRef={inputRef}
              onKeyDown={onKeyDown}
              maxRows={isMobile ? 5 : 8}
              className={styles.message}
              autoFocus={isMobile ? false : true}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e.target.value)}
            />
          </InputTrigger>
          {/** suggestion box */}
          {suggestionShown && (
            <div
              className={styles.suggestions}
              ref={suggestionsRef}
              style={{ left: isMobile ? '' : suggestionLeftPos }}
            >
              {filtered.map((user: SuggestionsUser, idx: number) => (
                <Suggestion
                  key={idx}
                  inCall={Boolean(user.inCall)}
                  isActive={idx === currentSelection}
                  signature={user.signature}
                  onMouseOver={(e: MouseEvent) => handleHover(e, idx)}
                  onClick={(e: MouseEvent) => handleSuggestionItemClick(e, idx)}
                  {...user}
                />
              ))}
            </div>
          )}
        </Col>
        <Col style={{ alignItems: 'flex-start' }}>
          <Dropdown onUpload={onUpload}>
            <span className={styles.addButton}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </Dropdown>
        </Col>
      </Row>

      <div className={styles.tipsWrapper}>
        {!isMobile && (
          <Typing
            visibility={typingUsers && typingUsers.length !== 0 ? 'visible' : 'hidden'}
            typingUsers={typingUsers}
          />
        )}
        {hintShown && (
          <>
            <TipsContent className={styles.tipsContent} />
            <Tooltip arrowPointAtCenter title={<TipsContent />} overlayClassName={styles.tooltip}>
              <span className={styles.tipsIcon}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Tips
              </span>
            </Tooltip>
          </>
        )}
      </div>
    </Row>
  );
};

MessageInput.defaultProps = {
  showAt: true,
};

export default MessageInput;
