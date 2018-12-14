import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import Layout from '../components/Layout'
import { withMDXScope } from "gatsby-mdx/context";
import YouTube from 'react-youtube';
import Img from '../components/Img';
import H from '../components/mdxComponents/Headings';
export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image
      }
      code {
        body
      }
    }
  }
`

function PostTemplate({ data: { mdx: post }, scope }) {
  if (!post) {
    return <p>No Post Found? This should be a 404</p>
  }
  // TODO  layouts should use mdx layouts,
  const editURL = `https://github.com/wesbos/wesbos/tree/master/src/${post.fileAbsolutePath.split('/src/')[1]}`;
  return <Layout>
    <Link to="/blog">← Back to Posts</Link>
    <Img src={post.frontmatter.image} alt={post.frontmatter.title} />
    <H>{post.frontmatter.title}</H>
    <H as="h2">{post.frontmatter.title}</H>
    <H as="h3">{post.frontmatter.title}</H>
    <H as="h4">{post.frontmatter.title}</H>
    <H as="h5">{post.frontmatter.title}</H>
    <H as="h6">{post.frontmatter.title}</H>
    <MDXRenderer scope={{
      YouTube,
      ...scope
    }}>{post.code.body}</MDXRenderer>
    <a rel="noopener noreferrer" target="_blank" href={editURL}>Edit This File</a>
  </Layout>
}


export default withMDXScope(PostTemplate);
