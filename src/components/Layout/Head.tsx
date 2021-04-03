import React from 'react';
import { Helmet } from 'react-helmet';

import { useHeadQuery } from './Head.query';

type MetaTag = {
  name?: string;
  content?: string;
  property?: string;
};

export const Head = () => {
  const { meta, developer } = useHeadQuery();

  const { title, description } = meta;
  const image = meta.image.publicURL;
  const lang = meta.language ?? 'en';
  const author = `${developer.firstName} ${developer.lastName}`.trim();

  const metaTags = [
    description && {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    description && {
      property: `og:description`,
      content: description,
    },
    image && {
      property: 'og:image',
      content: image,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    image && {
      name: `twitter:image`,
      content: image,
    },
    author && {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    description && {
      name: `twitter:description`,
      content: description,
    },
  ].filter(Boolean) as MetaTag[];

  return (
    <Helmet htmlAttributes={{ lang }} title={title} meta={metaTags}>
      <link rel="icon" type="image/png" sizes="16x16" href={meta.favicon.publicURL} />
      <link rel="icon" type="image/png" sizes="16x16" href={meta.favicon.publicURL} />
      <link rel="icon" type="image/png" sizes="32x32" href={meta.favicon.publicURL} />
    </Helmet>
  );
};
