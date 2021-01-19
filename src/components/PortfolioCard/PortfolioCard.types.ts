import type { ScreenSize } from '@/typings';

export type PortfolioCardProps = {
  title: string;
  image: string;
  label: string;
  description: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  type: ScreenSize;
};

export type PortfolioCardVariantProps = Omit<PortfolioCardProps, 'type'>;
