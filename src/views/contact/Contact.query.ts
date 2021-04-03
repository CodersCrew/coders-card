import { graphql, useStaticQuery } from 'gatsby';

type ContactData = {
  contactPageTitle?: string;
  contactPageDescription?: string;
  contactPageImage?: {
    publicURL?: string;
  };
};

type QueryResult = {
  contactPage: {
    frontmatter: ContactData;
  };
};

export const useContactQuery = () => {
  const result: QueryResult = useStaticQuery(graphql`
    query ContactPageQuery {
      contactPage: markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
        frontmatter {
          contactPageTitle
          contactPageDescription
          contactPageImage {
            publicURL
          }
        }
      }
    }
  `);

  return result.contactPage.frontmatter;
};
