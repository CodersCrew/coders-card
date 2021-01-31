export type ResumeItemProps = {
  labelText: string;
  headerText: string;
  title: string;
  description: string;
  isMobile: boolean;
};

export type ResumeItemVariantProps = Omit<ResumeItemProps, 'isMobile'>;
