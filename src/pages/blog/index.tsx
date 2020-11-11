import React, { useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { graphql, navigate } from 'gatsby';

import { BlogPostDialog } from '../../components/BlogPost';
import { BlogPost } from '../../components/BlogPostComponent';
import { Layout } from '../../components/Layout';
import { SectionTitle } from '../../components/SectionTitle';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { useComponentType } from '../../hooks/useComponentType';
import { FC } from '../../typings/components';
import { canUseWindow } from '../../utils/canUseWindow';
import { formatDate } from '../../utils/date';
import { BlogGQL, BlogPostType } from '../../views/blog-page/types';

const useStyles = makeStyles((theme) => ({
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
    boxShadow: theme.shadows[4],

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
  const { componentType } = useComponentType();
  const developerProfile = useDeveloperProfile();
  const [selectedBlogPost, setSelectedBlogPost] = useState(-1);

  if (canUseWindow && blogData.blogPost?.length === 0) {
    navigate('/');
  }

  // no blogpost will have index equal to -1 therefore no blogpost will be selected
  const handleCloseBlogPost = () => {
    setSelectedBlogPost(-1);
  };
  // if is first blogpost, choose last blogpost
  const handlePrevBlogPost = (index: number) => {
    if (blogData.blogPost) {
      setSelectedBlogPost(index === 0 ? blogData.blogPost.length - 1 : index - 1);
    }
  };

  // if is last blogpost, choose first blogpost
  const handleNextBlogPost = (index: number) => {
    if (blogData.blogPost) {
      setSelectedBlogPost(index === blogData.blogPost.length - 1 ? 0 : index + 1);
    }
  };

  const renderBlogPost = (blogPost: BlogPostType, index: number) => (
    <Box key={`${blogPost.blogTitle}-${blogPost.blogDescription}`}>
      <BlogPost
        className={classes.blogPost}
        image={blogPost.blogImage.publicURL}
        tagName={blogPost.blogLabel}
        text={blogPost.blogDescription}
        title={blogPost.blogTitle}
        date={formatDate(blogPost.publishDate, 'day')}
        onClick={() => setSelectedBlogPost(index)}
      />
      <BlogPostDialog
        contentheader={blogPost.blogDescription}
        contentmain={blogPost.blogBody}
        imgurl={blogPost.blogImage.publicURL}
        isOpen={index === selectedBlogPost}
        subtitle={formatDate(blogPost.publishDate, 'day')}
        tagtitle={blogPost.blogLabel}
        title={blogPost.blogTitle}
        type={componentType}
        handleClose={handleCloseBlogPost}
        handlePrev={() => handlePrevBlogPost(index)}
        handleNext={() => handleNextBlogPost(index)}
      />
    </Box>
  );

  return (
    <Layout
      developerProfile={developerProfile}
      meta={{
        title: blogData.blogPageTitle ?? 'Blog page',
        description: blogData.blogPageDescription ?? 'This is a blog page',
        imageUrl: blogData.blogPageImage.publicURL,
      }}
    >
      <Box className={classes.blogContainer}>
        <SectionTitle className={classes.title}>Blog</SectionTitle>
        <Box className={classes.blogPosts}>{blogData.blogPost ? blogData.blogPost.map(renderBlogPost) : null}</Box>
      </Box>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage {
    markdownRemark(fileAbsolutePath: { regex: "/blog/index-1.md/" }) {
      blogPage: frontmatter {
        blogPageTitle
        blogPageDescription
        blogPageImage {
          publicURL
        }
        blogPost {
          blogTitle
          blogLabel
          blogBody
          blogDescription
          blogImage {
            publicURL
          }
          publishDate
        }
      }
    }
  }
`;
