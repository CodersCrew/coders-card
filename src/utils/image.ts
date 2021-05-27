type TransformImageOptions = {
  width: number;
  height: number;
};

const SEPARATOR = '/image/upload/';

export const transformImage = (imageSrc: string, { width, height }: TransformImageOptions) => {
  if (!imageSrc.includes('res.cloudinary.com')) {
    return imageSrc;
  }

  const [prefix, suffix] = imageSrc.split(SEPARATOR);
  const sizingParam = `c_fill,h_${height},w_${width},q_99/`;

  return `${prefix}${SEPARATOR}${sizingParam}${suffix}`;
};
