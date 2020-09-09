import React, { useState } from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';

import { useComponentType } from '../../hooks/useComponentType';

import { DetailsCard } from '../../components/DetailsCard';
import { SectionTitle } from '../../components/SectionTitle';
import { BlogPost } from '../../components/BlogPostComponent';
import { BlogPostDialog } from '../../components/BlogPost';

import { FC } from '../../typings/components';
import { BlogGQL } from '../../views/blog-page/types';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      padding: theme.spacing(8, 2, 0, 2),
    },
  },
  aside: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      position: 'sticky',
      top: theme.spacing(8),
      height: 668,
      width: 280,
      marginRight: theme.spacing(4),
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(0, 0, 7, 0),

    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 3, 7, 3),
      borderRadius: 16,
    },

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(0, 0, 7, 0),
      boxShadow: '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
    },
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.1)',
    height: 56,
    width: '100%',
    // marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      borderRadius: 8,
      boxShadow: '0 40px 50px 0 rgba(103, 118, 128, 0.1)',
      marginBottom: theme.spacing(4),
      height: 120,
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7),
      height: 56,
    },
  },
  blogContainer: {
    borderRadius: 16,
    padding: theme.spacing(4, 3, 3, 3),

    [theme.breakpoints.up('lg')]: {
      width: '100%',
      padding: theme.spacing(4),
    },
  },
  blogPosts: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      gridRowGap: theme.spacing(3),
    },

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '400px 400px',
      alignItems: 'center',
      justifyContent: 'center',
      gridGap: theme.spacing(5),
    },
  },
  title: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 2),
    },
  },
  blogPost: {
    boxShadow: '0 8px 20px 0 rgba(68, 86, 108, 0.1)',

    [theme.breakpoints.up('sm')]: {
      maxWidth: 800,
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: 400,
    },
  },
}));

const BlogPage: FC<{ data: BlogGQL }> = ({ data }) => {
  const blogData = data.markdownRemark.blogPage;
  const classes = useStyles();
  const { componentType, isDesktop } = useComponentType();

  const [selectedBlogpost, setSelectedBlogpost] = useState(-1);

  // no blogpost will have index equal to -1 therefore no blogpost will be selected
  const handleCloseBlogpost = () => {
    setSelectedBlogpost(-1);
  };
  // if is first blogpost, choose last blogpost
  const handlePrevBlogpost = (index: number) => {
    setSelectedBlogpost(index === 0 ? blogData.blog_post.length - 1 : index - 1);
  };

  // if is last blogpost, choose first blogpost
  const handleNextBlogpost = (index: number) => {
    setSelectedBlogpost(index === blogData.blog_post.length - 1 ? 0 : index + 1);
  };

  return (
    <Container className={classes.container}>
      {isDesktop && (
        <Box className={classes.aside}>
          <DetailsCard type={componentType} />
        </Box>
      )}
      <Box className={classes.main}>
        <Box className={classes.navbar}>NavBar</Box>
        <Box className={classes.mainContent}>
          <Box className={classes.blogContainer}>
            <SectionTitle className={classes.title}>Blog</SectionTitle>
            <Box className={classes.blogPosts}>
              {blogData.blog_post.map((blogPost, index) => (
                <div key={index}>
                  <BlogPost
                    key={index}
                    className={classes.blogPost}
                    image={blogPost.blog_image.publicURL}
                    tagName={blogPost.blog_label}
                    text={blogPost.blog_description}
                    title={blogPost.blog_title}
                    date={dayjs(blogPost.publish_date).format('DD MMMM YYYY')}
                    onClick={() => setSelectedBlogpost(index)}
                  />
                  <BlogPostDialog
                    contentheader={blogPost.blog_description}
                    contentmain={blogPost.blog_body}
                    imgurl={blogPost.blog_image.publicURL}
                    isOpen={index === selectedBlogpost}
                    subtitle={dayjs(blogPost.publish_date).format('DD MMMM YYYY')}
                    tagtitle={blogPost.blog_label}
                    title={blogPost.blog_title}
                    type={componentType}
                    handleClose={() => handleCloseBlogpost()}
                    handlePrev={() => handlePrevBlogpost(index)}
                    handleNext={() => handleNextBlogpost(index)}
                  />
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage {
    markdownRemark(fileAbsolutePath: { regex: "/blog/index-1.md/" }) {
      blogPage: frontmatter {
        blog_page_title
        blog_post {
          blog_title
          blog_label
          blog_body
          blog_description
          blog_image {
            publicURL
          }
          publish_date
        }
      }
    }
  }
`;
