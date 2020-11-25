import { ProjectType } from './types';

const maxNumberOfTabs = 2;
const otherLabel = 'More';
const allLabel = 'All';

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

const groupByProjectLabel = (projects: ProjectType[]) => {
  return projects.reduce<{ [key: string]: ProjectType[] }>((groupedProjects, project) => {
    // eslint-disable-next-line no-param-reassign
    (groupedProjects[project.projectLabel] = groupedProjects[project.projectLabel] || []).push(project);
    return groupedProjects;
  }, {});
};

export const getTabsData = (projects: ProjectType[]) => {
  const groupedProjects = groupByProjectLabel(projects);
  const tabLabelsNumber = Object.keys(groupedProjects).length;
  const groupedTabsProjects = Object.entries(groupedProjects).map((groupOfProjects) => {
    const [projectLabel, projectProperties] = groupOfProjects;
    return { projectLabel, projectProperties };
  });

  const allGroupOfProjects = groupedTabsProjects.reduce(
    (acc, currentGroupProjects) => {
      return { ...acc, projectProperties: [...currentGroupProjects.projectProperties, ...acc.projectProperties] };
    },
    { projectLabel: allLabel, projectProperties: [] },
  );

  if (tabLabelsNumber <= maxNumberOfTabs) {
    const allProjects = [allGroupOfProjects, ...groupedTabsProjects];
    return allProjects;
  }
  // Return sorted categories due to the quantity of the projects in categories
  const sortedGroupedTabsProjects = groupedTabsProjects.sort(compareLengthOfProjects);
  // Get projects which have own tabs
  const groupByBasicTab = sortedGroupedTabsProjects.slice(0, maxNumberOfTabs);
  // Get projects which have Other tab
  const groupByOtherTab = sortedGroupedTabsProjects.slice(maxNumberOfTabs, sortedGroupedTabsProjects.length);

  const otherGroupOfProjects = groupByOtherTab.reduce(
    (acc, currentGroupProjects) => {
      return { ...acc, projectProperties: [...currentGroupProjects.projectProperties, ...acc.projectProperties] };
    },
    { projectLabel: otherLabel, projectProperties: [] },
  );
  return [allGroupOfProjects, ...groupByBasicTab, otherGroupOfProjects];
};
