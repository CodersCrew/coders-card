import { graphql, useStaticQuery } from 'gatsby';

export type DeveloperData = {
  lastName: string;
  isFreelancer: boolean;
  firstName: string;
  email: string;
  phone?: string;
  country: string;
  city: string;
  avatar: {
    publicURL: string;
  };
  socialMedia: {
    facebook?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
  position: string;
  cv?: string;
};

type QueryResult = {
  markdownRemark: {
    developer: DeveloperData;
  };
};

export const useDeveloperProfile = () => {
  const result: QueryResult = useStaticQuery(graphql`
    query DeveloperQuery {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(fileAbsolutePath: { regex: "pages/developer.md/" }) {
        developer: frontmatter {
          firstName
          lastName
          isFreelancer
          email
          country
          city
          socialMedia {
            facebook
            github
            instagram
            twitter
          }
          avatar {
            publicURL
          }
          position
          cv
          phone
        }
      }
    }
  `);

  return result.markdownRemark.developer;
};
