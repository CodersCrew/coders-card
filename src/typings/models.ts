export type Image = {
  publicURL: string;
};

export type LevelRange = 0 | 1 | 2 | 3 | 4 | 5;

export type Skill = {
  skillName: string;
  skillCategory: string;
  skillIcon?: Image;
  skillValue: LevelRange;
};

export type Testimonial = {
  testimonialText: string;
  testimonialImage: Image;
  testimonialName: string;
  testimonialJob: string;
};

export type Project = {
  projectLabel: string;
  projectCode?: string;
  projectPreviewImage: Image;
  projectDescription: string;
  projectRole: string;
  projectPreviewNote: string;
  projectApp?: string;
  projectStartDate: string;
  projectFinishDate: string;
  projectMockups?: string;
  projectTechnologies: {
    technologyName: string;
  }[];
  projectName: string;
};

export type WorkExperience = {
  startJobDate: string;
  finishJobDate: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
};

export type Education = {
  startSchoolDate: string;
  finishSchoolDate: string;
  schoolName: string;
  course: string;
  educationDescription: string;
};
