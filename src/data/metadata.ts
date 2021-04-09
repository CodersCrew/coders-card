import { attributes } from '../../content/metadata.md';

type Metadata = {
  title: string;
  description: string;
  image: string;
  favicon: string;
  language: string;
};

export const metadata: Metadata = attributes;
