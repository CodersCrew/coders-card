type TransformImageOptions = {
  width: number;
  height: number;
  resize?: 'fit' | 'smartcrop';
};

export const transformImage = (imageSrc: string, { width, height, resize = 'smartcrop' }: TransformImageOptions) =>
  `${imageSrc}?nf_resize=${resize}&w=${width}&h=${height}`;
