type TransformImageOptions = {
  width: number;
  height: number;
  resize?: 'fit' | 'smartcrop';
};

// We increase the requested image size by 1.2 factor as Netlify provides compression that lowers its quality.
export const transformImage = (imageSrc: string, { width, height, resize = 'fit' }: TransformImageOptions) =>
  `${imageSrc}?nf_resize=${resize}&w=${Math.round(width * 1.2)}&h=${Math.round(height * 1.2)}`;
