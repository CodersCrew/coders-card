import Head from 'next/head';

import { developer } from '@/data/developer';
import { metadata } from '@/data/metadata';

type MetaTag = {
  name?: string;
  content?: string;
  property?: string;
};

export const PageHead = () => {
  const { title, description, image, favicon } = metadata;
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
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      {metaTags.map((metaTag) => (
        <meta key={metaTag.name || metaTag.property} {...metaTag} />
      ))}
    </Head>
  );
};
