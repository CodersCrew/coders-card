export type TestimonialProps = {
  content: string;
  authorImage: string;
  authorName: string;
  authorJob: string;
  isMobile: boolean;
};

export type TestimonialVariantProps = Omit<TestimonialProps, 'isMobile'>;
