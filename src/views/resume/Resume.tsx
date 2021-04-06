import React from 'react';
import { Box, Divider } from '@material-ui/core';

import { ResumeItem } from '@/components/ResumeItem';
import { SectionTitle } from '@/components/SectionTitle';
import { resume } from '@/data/resume';
import { useComponentType } from '@/hooks/useComponentType';
import { formatDate } from '@/utils/date';

import { useResumeStyles } from './Resume.styles';

const formatLabelText = (dateStart: string, dateFinish: string) => {
  return `${formatDate(dateStart, 'month')} - ${formatDate(dateFinish, 'month', true)}`;
};

export const Resume = () => {
  const classes = useResumeStyles();
  const { isMobile } = useComponentType();

  return (
    <Box className={classes.resumePageContainer}>
      <SectionTitle className={classes.title}>Work Experience</SectionTitle>
      <Box className={classes.project}>
        {resume.workExperience.map(({ companyName, startDate, finishDate, jobDescription, jobName }) => (
          <Box key={`${companyName}-${jobName}`}>
            <Divider className={classes.divider} orientation="vertical" />
            <ResumeItem
              isMobile={isMobile}
              labelText={formatLabelText(startDate, finishDate)}
              headerText={jobName}
              title={companyName}
              description={jobDescription}
            />
            <Divider className={classes.divider} orientation="vertical" />
          </Box>
        ))}
      </Box>
      <SectionTitle className={classes.title}>Education</SectionTitle>
      {resume.education.map(({ schoolName, course, description, startDate, finishDate }) => (
        <Box key={`${schoolName}-${course}`}>
          <Divider className={classes.divider} orientation="vertical" />
          <ResumeItem
            isMobile={isMobile}
            labelText={formatLabelText(startDate, finishDate)}
            headerText={course}
            title={schoolName}
            description={description}
          />
          <Divider className={classes.divider} orientation="vertical" />
        </Box>
      ))}
    </Box>
  );
};
