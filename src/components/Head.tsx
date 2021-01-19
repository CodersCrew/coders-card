import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

type HeadProps = {
  title?: string;
  description?: string;
  image?: string;
  author: string;
};

type HeadData = {
  meta: {
    frontmatter: {
      defaultPageTitle: string;
      defaultPageDescription: string;
      defaultPageImage: {
        publicURL: string;
      };
      favicon: {
        publicURL: string;
      };
      websiteLanguage: string;
    };
  };
};

export const Head = ({ description, title, image, author }: HeadProps) => {
  const {
    meta: { frontmatter: metadata },
  }: HeadData = useStaticQuery(graphql`
    query {
      meta: markdownRemark(fileAbsolutePath: { regex: "/metadata/index-1.md/" }) {
        frontmatter {
          defaultPageTitle
          defaultPageDescription
          defaultPageImage {
            publicURL
          }
          favicon {
            publicURL
          }
          websiteLanguage
        }
      }
    }
  `);

  const pageDescription = description ?? metadata.defaultPageDescription;
  const pageTitle = title ?? metadata.defaultPageTitle;
  const pagePreviewImage = image ?? metadata.defaultPageImage.publicURL;
  const websiteLanguage = metadata.websiteLanguage ?? 'en';

  return (
    <Helmet
      htmlAttributes={{
        lang: websiteLanguage,
      }}
      title={pageTitle}
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: 'og:image',
          content: pagePreviewImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: pagePreviewImage,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
      ]}
    >
      <link rel="icon" type="image/png" sizes="16x16" href={metadata.favicon.publicURL} />
      <link rel="icon" type="image/png" sizes="16x16" href={metadata.favicon.publicURL} />
      <link rel="icon" type="image/png" sizes="32x32" href={metadata.favicon.publicURL} />
    </Helmet>
  );
};
