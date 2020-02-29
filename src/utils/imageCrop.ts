import ReactCrop from 'react-image-crop';

interface Position {
  x: number;
  y: number;
}

/**
 * Get cropped image url
 * @param {HTMLImageElement} image
 * @param {ReactCrop.Crop} crop
 * @returns {Promise<string>} fileUrl
 */
export function getCroppedImg(image: HTMLImageElement, crop: ReactCrop.Crop): Promise<string> {
  let fileUrl: string;
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  canvas.width = crop.width || 0;
  canvas.height = crop.height || 0;

  ctx.drawImage(
    image,
    (crop.x || 0) * scaleX,
    (crop.y || 0) * scaleY,
    (crop.width || 0) * scaleX,
    (crop.height || 0) * scaleY,
    0,
    0,
    crop.width || 0,
    crop.height || 0,
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob: Blob | null) => {
      if (!blob) {
        reject(new Error('Canvas is empty'));
        return;
      }

      window.URL.revokeObjectURL(fileUrl);
      fileUrl = window.URL.createObjectURL(blob);

      resolve(fileUrl);
    }, 'image/png');
  });
}

/**
 *
 * @param e
 * @returns {Position}
 */
export function getClientPos(e: any): Position {
  let pageX;
  let pageY;

  if (e.touches) {
    [{ pageX, pageY }] = e.touches;
  } else {
    ({ pageX, pageY } = e);
  }

  return {
    x: pageX,
    y: pageY,
  };
}
