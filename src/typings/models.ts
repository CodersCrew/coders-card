export type Image = {
  publicURL: string;
};

export type Skill = {
  name: string;
  category: string;
  icon?: Image;
  value: 1 | 2 | 3 | 4 | 5;
};

export type Testimonial = {
  content: string;
  authorImage: Image;
  authorName: string;
  authorJob: string;
};

export type ProjectTechnology = {
  name: string;
};

export type ProjectButton = {
  name: string;
  icon: string;
  url: string;
};

export type Project = {
  name: string;
  label: string;
  previewImage: Image;
  description: string;
  role: string;
  previewNote: string;
  startDate: string;
  finishDate: string;
  technologies: ProjectTechnology[];
  buttons: ProjectButton[];
};

export type WorkExperience = {
  jobName: string;
  jobDescription: string;
  companyName: string;
  startDate: string;
  finishDate: string;
};

export type Education = {
  schoolName: string;
  course: string;
  description: string;
  startDate: string;
  finishDate: string;
};
