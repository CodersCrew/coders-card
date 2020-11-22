import { ProjectType } from '../../views/portfolio-page/types';

type GroupedProjectsByLabelType = {
  projectLabel: string;
  projectProperties: ProjectType[];
};

const compareLengthOfProjects = (
  longerLengthGroupedProjectsByLabel: GroupedProjectsByLabelType,
  shorterLengthGroupedProjectsByLabel: GroupedProjectsByLabelType,
): number => {
  return (
    shorterLengthGroupedProjectsByLabel.projectProperties.length -
    longerLengthGroupedProjectsByLabel.projectProperties.length
  );
};

// const groupBy = (arr: ProjectType[], key: string) =>
//   arr.reduce((acc, project) => {
//     const property: string = project[key];
//     if (property in acc) {
//       return { ...acc, [property]: acc[property].concat(project) };
//     }
//     return { ...acc, [property]: [project] };
//   }, {} as { [key: string]: ProjectType[] });

const groupBy = <T>(arr: T[], fn: (x: T) => string) =>
  arr.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {} as { [key: string]: T[] });

export const getTabsData = (projects: ProjectType[], maxNumberOftabs: number, OtherLabel: string) => {
  const groupedProjects = groupBy(projects, 'projectLabel');
  const tabLabelsNumber = Object.keys(groupedProjects).length;
  const groupedTabsProjects = Object.entries(groupedProjects).map((groupOfProjects) => {
    const [projectLabel, projectProperties] = groupOfProjects;
    return { projectLabel, projectProperties };
  });
  if (tabLabelsNumber <= maxNumberOftabs) {
    return groupedTabsProjects;
  }
  // Return sorted categories due to the quantity of the projects in categories
  const sortedGroupedTabsProjects = groupedTabsProjects.sort(compareLengthOfProjects);
  // Get projects which have own tabs
  const groupByBasicTab = sortedGroupedTabsProjects.slice(0, maxNumberOftabs);
  // Get projects which have Other tab
  const groupByOtherTab = sortedGroupedTabsProjects.slice(maxNumberOftabs, sortedGroupedTabsProjects.length);

  const otherGroupOfProjects = groupByOtherTab.reduce(
    (acc, currentGroupProjects) => {
      return { ...acc, projectProperties: [...currentGroupProjects.projectProperties, ...acc.projectProperties] };
    },
    { projectLabel: OtherLabel, projectProperties: [] },
  );

  return [...groupByBasicTab, otherGroupOfProjects];
};
