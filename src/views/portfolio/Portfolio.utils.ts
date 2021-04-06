import { Project } from '@/typings';

const maxNumberOfTabs = 2;
const otherLabel = 'More';
const allLabel = 'All';

type GroupedProjectsByLabelType = {
  projectLabel: string;
  projectProperties: Project[];
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

const groupByProjectLabel = (projects: Project[]) => {
  return projects.reduce<{ [key: string]: Project[] }>((groupedProjects, project) => {
    return { ...groupedProjects, [project.label]: [...(groupedProjects[project.label] || []), project] };
  }, {});
};

export const getTabsData = (projects: Project[]) => {
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
