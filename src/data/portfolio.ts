import type { Project } from '@/typings';

import { attributes } from '../../content/portfolio.md';

type Portfolio = {
  projects: Project[];
};

export const portfolio: Portfolio = attributes;
