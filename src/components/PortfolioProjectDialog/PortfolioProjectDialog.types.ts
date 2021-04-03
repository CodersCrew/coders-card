import { ScreenSize } from '@/typings';

export type PortfolioProjectDialogProps = {
  title: string;
  subtitle: string;
  tagTitle: string;
  contentHeader: string;
  imageUrl: string;
  contentMainDescription: string;
  contentMainRole: string;
  isOpen: boolean;
  codeUrl: string;
  mockupsUrl: string;
  projectUrl: string;
  handleClose: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  tags: { name: string }[];
  type: ScreenSize;
};

export type PortfolioProjectDialogVariantProps = Omit<PortfolioProjectDialogProps, 'type'>;
