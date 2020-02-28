import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import format from 'date-fns/format';
import Layout from '../components/Layout';
import PostGrid, { PostGridItem } from '../styles/PostGrid';
import H from '../components/mdxComponents/Headings';

const Blog = function({ data }) {
  if (!data) return <p>Shooooot! No data found!</p>;
  console.log(data);
  return (
    <Layout>
      <PostGrid>
        {data.allMdx &&
          data.allMdx.edges.map(function({ node: post }) {
            return (
              <PostGridItem key={post.id}>
                {post.frontmatter.image &&
                  post.frontmatter.image.childImageSharp && (
                    <div>
                      <Link to={post.fields.slug}>
                        <Img
                          fluid={post.frontmatter.image.childImageSharp.fluid}
                        />
                      </Link>
                      <div className="postMeta">
                        <time dateTime={post.frontmatter.date}>
                          {format(
                            new Date(post.frontmatter.date),
                            'MMMM d, yyyy'
                          )}
                        </time>
                        <ul className="categories">
                          {post.frontmatter.category.map(cat => (
                            <li key={cat}>{cat}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                <div>
                  <H as="h3">
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </H>
                  <p>{post.excerpt}</p>
                </div>
              </PostGridItem>
            );
          })}
      </PostGrid>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { fields: { collection: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            collection
            slug
          }
          frontmatter {
            title
            date
            category
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
