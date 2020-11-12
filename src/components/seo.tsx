import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

type SEOProps = {
  title: string;
  description: string;
  author: string;
  lang: string;
};

function SEO({ description, title, author, lang }: SEOProps) {
  const data = useStaticQuery(graphql`
    query {
      meta: markdownRemark(fileAbsolutePath: { regex: "/metadata/index-1.md/" }) {
        frontmatter {
          metadataFavicon {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
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
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    >
      <link rel="icon" type="image/png" sizes="16x16" href={data.meta.frontmatter.metadataFavicon.publicURL} />
      <link rel="icon" type="image/png" sizes="16x16" href={data.meta.frontmatter.metadataFavicon.publicURL} />
      <link rel="icon" type="image/png" sizes="32x32" href={data.meta.frontmatter.metadataFavicon.publicURL} />
    </Helmet>
  );
}

export default SEO;
