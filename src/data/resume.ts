import type { Education, WorkExperience } from '@/typings';

import { attributes } from '../../content/resume.md';

type Resume = {
  workExperience: WorkExperience[];
  education: Education[];
};

export const resume: Resume = attributes;
