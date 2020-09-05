export type ResumePageData = {
  resumePage: {
    frontmatter: {
      resumePageTitle: string;
      workExperience: {
        startJobDate: string;
        finishJobDate: string;
        jobTitle: string;
        companyName: string;
        jobDescription: string;
      }[];
      education: {
        startSchoolDate: string;
        finishSchoolDate: string;
        schoolName: string;
        course: string;
        educationDescription: string;
      }[];
    };
  };
  developerProfile: {
    frontmatter: {
      firstName: string;
      lastName: string;
      isFreelancer: boolean;
      email: string;
      phone: string;
      country: string;
      city: string;
      avatar: {
        publicURL: string;
      };
      socialMedia: {
        facebook: string;
        github: string;
        instagram: string;
        twitter: string;
      };
      position: string;
      cv: string;
    };
  };
};
