import type { ProjectButton, ScreenSize } from '@/typings';

export type PortfolioProjectDialogProps = {
  title: string;
  subtitle: string;
  tagTitle: string;
  contentHeader: string;
  imageUrl: string;
  contentMainDescription: string;
  contentMainRole: string;
  isOpen: boolean;
  handleClose: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  tags: { name: string }[];
  type: ScreenSize;
  buttons: ProjectButton[];
};

export type PortfolioProjectDialogVariantProps = Omit<PortfolioProjectDialogProps, 'type'>;
