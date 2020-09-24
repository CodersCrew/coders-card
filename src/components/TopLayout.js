import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import DeveloperProfileProvider from '../containers/DeveloperProfile';
import { ThemeProvider } from '../utils/theme';

export default function TopLayout(props) {
  const data = useStaticQuery(graphql`
    query DeveloperQuery {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(fileAbsolutePath: { regex: "/developer-profile/index-1.md/" }) {
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

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <DeveloperProfileProvider developerProfile={data.markdownRemark.developerProfile}>
      <ThemeProvider>{props.children}</ThemeProvider>
    </DeveloperProfileProvider>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
