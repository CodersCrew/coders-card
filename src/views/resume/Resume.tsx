import React from 'react';
import { Box, Divider } from '@material-ui/core';

import { Layout } from '@/components/Layout';
import { ResumeItem } from '@/components/ResumeItem';
import { SectionTitle } from '@/components/SectionTitle';
import { useComponentType } from '@/hooks/useComponentType';
import { formatDate } from '@/utils/date';

import { useResumeQuery } from './Resume.query';
import { useResumeStyles } from './Resume.styles';

export const Resume = () => {
  const data = useResumeQuery();
  const classes = useResumeStyles();
  const { isMobile } = useComponentType();

  const formatLabelText = (dateStart: string, dateFinish: string) => {
    return `${formatDate(dateStart, 'month')} - ${formatDate(dateFinish, 'month', true)}`;
  };

  return (
    <Layout>
      <Box className={classes.resumePageContainer}>
        <SectionTitle className={classes.title}>Work Experience</SectionTitle>
        <Box className={classes.project}>
          {data.workExperience.map((item) => (
            <Box key={`${item.companyName}-${item.jobTitle}`}>
              <Divider className={classes.divider} orientation="vertical" />
              <ResumeItem
                isMobile={isMobile}
                labelText={formatLabelText(item.startJobDate, item.finishJobDate)}
                headerText={item.jobTitle}
                title={item.companyName}
                description={item.jobDescription}
              />
              <Divider className={classes.divider} orientation="vertical" />
            </Box>
          ))}
        </Box>
        <SectionTitle className={classes.title}>Education</SectionTitle>
        {data.education.map((item) => (
          <Box key={`${item.schoolName}-${item.educationDescription}`}>
            <Divider className={classes.divider} orientation="vertical" />
            <ResumeItem
              isMobile={isMobile}
              labelText={formatLabelText(item.startSchoolDate, item.finishSchoolDate)}
              headerText={item.course}
              title={item.schoolName}
              description={item.educationDescription}
            />
            <Divider className={classes.divider} orientation="vertical" />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};
