import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { ThemeProvider } from '../../src/utils/theme';
import DeveloperProfileProvider from '../../src/containers/DeveloperProfile';

export default function TopLayout(props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
    <DeveloperProfileProvider developerProfile={data.markdownRemark.developerProfile}>
      <ThemeProvider>{props.children}</ThemeProvider>
    </DeveloperProfileProvider>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
