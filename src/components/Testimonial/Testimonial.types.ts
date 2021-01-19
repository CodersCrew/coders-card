export type TestimonialProps = {
  image: string;
  label: string;
  labelBold: string;
  description: string;
  isMobile: boolean;
};

export type TestimonialVariantProps = Omit<TestimonialProps, 'isMobile'>;
