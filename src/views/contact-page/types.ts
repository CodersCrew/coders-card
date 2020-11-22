export type ContactGQL = {
  contactPage: {
    frontmatter: {
      contactPageTitle?: string;
      contactPageDescription?: string;
      contactPageImage?: {
        publicURL?: string;
      };
    };
  };
};
