export interface CardProps {
  title: string;
  image: string;
  label: string;
  description: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}
