import { faPlus, faTrashAlt } from '@fortawesome/pro-solid-svg-icons';
import { Row } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { RcFile } from 'antd/lib/upload';
import React, { FC, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import { useMedia } from 'react-use';

import { getCroppedImg } from '../../utils';
import { FileDropZone } from '../FileUpload';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import Modal from './Modal';

import 'react-image-crop/dist/ReactCrop.css';
import styles from './ImageCrop.module.scss';

const accept = '.jpg, .jpeg, .png';

interface Props extends ModalProps {
  onImageUrl?: (url: any) => void;
}

export const ImageCrop: FC<Props> = (props) => {
  const { title, cancelText, width, onImageUrl, ...restProps } = props;

  const isMobile = useMedia('(max-width: 575px)');
  // const dragRef = useRef<boolean>(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [path, setPath] = useState<string | ArrayBuffer | null>(null);
  const [crop, setCrop] = useState<ReactCrop.Crop>({
    unit: '%',
    width: 90,
    height: 38,
    x: 5,
    y: 31,
    aspect: 536 / 108,
  });

  const beforeUpload = (file: RcFile, fileList: RcFile[]): boolean => {
    const reader = new FileReader();

    reader.onload = () => {
      setPath(reader.result);
    };
    reader.readAsDataURL(file);

    return false;
  };

  const onImageLoaded = (image: HTMLImageElement) => {
    imageRef.current = image;
  };

  const onCropChange = (crop: ReactCrop.Crop, percentCrop: ReactCrop.PercentCrop) => {
    setCrop(percentCrop);
  };

  const makeClientCrop = async () => {
    if (imageRef && imageRef.current && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(imageRef.current, crop);
      onImageUrl && onImageUrl(croppedImageUrl);
    }
  };

  const onRemove = () => setPath(null);

  return (
    <Modal width={width} title="Edit Image" okText="Save Changes" bodyStyle={{ padding: 0 }} {...restProps}>
      <Row type="flex" justify="center" align="middle" className={styles.wrapper}>
        {!path ? (
          <FileDropZone
            accept={accept}
            beforeUpload={beforeUpload}
            wrapClassName={styles.uploadWrap}
            contentClassName={styles.content}
            buttonText={isMobile ? 'Upload image' : 'Drag and drop or upload'}
          />
        ) : (
          <>
            <ReactCrop
              locked
              disabled
              crop={crop}
              ruleOfThirds
              onChange={onCropChange}
              onImageLoaded={onImageLoaded}
              src={typeof path === 'string' ? path : ''}
            />
            <Row className={styles.button}>
              <Tooltip title="Remove" light>
                <Icon icon={faTrashAlt} onClick={onRemove} className={styles.iconBtn} />
              </Tooltip>
              <Tooltip title="Crop" light>
                <Icon icon={faPlus} onClick={makeClientCrop} className={styles.iconBtn} />
              </Tooltip>
            </Row>
          </>
        )}
      </Row>
    </Modal>
  );
};

ImageCrop.defaultProps = {
  width: 600,
};

export default ImageCrop;
