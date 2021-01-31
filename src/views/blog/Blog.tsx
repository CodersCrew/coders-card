import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { navigate } from 'gatsby';

import { BlogPost } from '@/components/BlogPost';
import { BlogPostDialog } from '@/components/BlogPostDialog';
import { Layout } from '@/components/Layout';
import { SectionTitle } from '@/components/SectionTitle';
import { useComponentType } from '@/hooks/useComponentType';
import { useDeveloperProfile } from '@/hooks/useDeveloperProfile';
import { formatDate } from '@/utils/date';

import { SingleBlogPost, useBlogQuery } from './Blog.query';
import { useBlogStyles } from './Blog.styles';

const isBrowser = typeof window !== `undefined`;

export const Blog = () => {
  const data = useBlogQuery();
  const classes = useBlogStyles();
  const { componentType } = useComponentType();
  const developerProfile = useDeveloperProfile();
  const [selectedBlogPost, setSelectedBlogPost] = useState(-1);

  if (isBrowser && data.blogPost?.length === 0) {
    navigate('/');
  }

  // no blogpost will have index equal to -1 therefore no blogpost will be selected
  const handleCloseBlogPost = () => {
    setSelectedBlogPost(-1);
  };
  // if is first blogpost, choose last blogpost
  const handlePrevBlogPost = (index: number) => {
    if (data.blogPost) {
      setSelectedBlogPost(index === 0 ? data.blogPost.length - 1 : index - 1);
    }
  };

  // if is last blogpost, choose first blogpost
  const handleNextBlogPost = (index: number) => {
    if (data.blogPost) {
      setSelectedBlogPost(index === data.blogPost.length - 1 ? 0 : index + 1);
    }
  };

  const renderBlogPost = (blogPost: SingleBlogPost, index: number) => (
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
        title: data.blogPageTitle,
        description: data.blogPageDescription,
        imageUrl: data.blogPageImage?.publicURL,
      }}
    >
      <Box className={classes.blogContainer}>
        <SectionTitle className={classes.title}>Blog</SectionTitle>
        <Box className={classes.blogPosts}>{data.blogPost ? data.blogPost.map(renderBlogPost) : null}</Box>
      </Box>
    </Layout>
  );
};
