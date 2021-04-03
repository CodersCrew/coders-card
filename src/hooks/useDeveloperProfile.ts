import { graphql, useStaticQuery } from 'gatsby';

export type DeveloperProfileData = {
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
    developerProfile: DeveloperProfileData;
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
      markdownRemark(fileAbsolutePath: { regex: "pages/developer-profile.md/" }) {
        developerProfile: frontmatter {
          lastName
          isFreelancer
          firstName
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

  return result.markdownRemark.developerProfile;
};
