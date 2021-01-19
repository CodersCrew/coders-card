import type { ScreenSize } from '@/typings';

export type BlogPostDialogProps = {
  title: string;
  subtitle: string;
  tagtitle: string;
  contentheader: string;
  imgurl: string;
  contentmain: string;
  isOpen: boolean;
  handleClose: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  type: ScreenSize;
};

export type BlogPostDialogVariantProps = Omit<BlogPostDialogProps, 'type'>;
