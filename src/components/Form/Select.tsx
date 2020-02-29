import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Form, Select as AntdSelect } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { OptionProps, SelectProps } from 'antd/lib/select';
import React from 'react';

import { Icon } from '../Icon';
import styles from './Select.module.scss';

const { Option } = AntdSelect;
const { Item } = Form;

interface Option extends OptionProps {
  selected?: boolean;
}

interface Props extends SelectProps, FormItemProps {
  value?: any;
  options: Option[];
  dropdownAlign?: any;
  selectOnchange?: (e: any) => void;
}

const CustomSelect: React.FC<Props> = (props) => {
  const {
    selectOnchange,
    validateStatus = '',
    help,
    label,
    labelCol,
    required,
    wrapperCol,
    hasFeedback,
    ...restProps
  } = props;
  const { defaultValue, value, style, options, className, dropdownClassName } = restProps;
  const hasFilled: boolean = value || defaultValue;
  const classNames = [styles.input, hasFilled ? styles.hasFilled : '', styles[validateStatus], className].join(' ');
  const dropdownClassNames = [styles.dropdown, dropdownClassName].join(' ');

  const [open, setOpen] = React.useState(false);

  return (
    <Item
      help={help}
      label={label}
      style={style}
      labelCol={labelCol}
      required={required}
      className={classNames}
      wrapperCol={wrapperCol}
      hasFeedback={hasFeedback}
      validateStatus={validateStatus}
    >
      <AntdSelect
        dropdownClassName={dropdownClassNames}
        onDropdownVisibleChange={setOpen}
        suffixIcon={<Icon className={styles.suffix} icon={open ? faChevronUp : faChevronDown} />}
        {...restProps}
      >
        {options &&
          options.map((option: OptionProps, index: number) => (
            <Option value={option.value} key={index} {...option} >
              {option.label || option.value}
            </Option>
          ))}
      </AntdSelect>
    </Item>
  );
};

class Select extends React.PureComponent<Props> {
  public render = () => (
    <CustomSelect
      dropdownAlign={{
        offset: [0, 8],
      }}
      {...this.props}
    />
  );
}

export default Select;
