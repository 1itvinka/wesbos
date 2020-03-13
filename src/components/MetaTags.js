import React from 'react';
import Helmet from 'react-helmet';

export function PostMetaTags({ post }) {
  const canonical = `https://wesbos.com/${post.frontmatter.slug}`;
  const url = `${process.env.GATSBY_DEPLOY_PRIME_URL}/${post.frontmatter.slug}`;
  const thumbnailData = {
    title: post.frontmatter.title,
    url,
    thumbnail: post.frontmatter.image?.publicURL,
  };
  const thumbnailQuery = new URLSearchParams(
    Object.fromEntries(
      Object.entries(thumbnailData).filter(([key, val]) => val !== undefined)
    )
  ).toString();

  const ogImage = `${process.env.GATSBY_DEPLOY_PRIME_URL}/.netlify/functions/thumbnail?${thumbnailQuery}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta name="generator" content="Wes Bos on Gatsby!" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@wesbos" />
      <meta name="twitter:creator" content="@wesbos" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={post.frontmatter.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.frontmatter.title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={post.excerpt} />
      <meta
        property="article:published_time"
        content={new Date(post.frontmatter.date).toISOString()}
      />
      <meta property="og:site_name" content="Wes Bos" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_CA" />
    </Helmet>
  );
}
export function TipMetaTags({ post }) {
  const location = useLocation();
  const canonical = `https://wesbos.com/${post.frontmatter.slug}`;
  const url = `${process.env.GATSBY_DEPLOY_PRIME_URL}/${post.frontmatter.slug}`;
  const thumbnailQuery = `?title=${post.frontmatter.title}&url=${url}&thumbnail=${post.frontmatter.image.publicURL}`;
  const ogImage = `${process.env.GATSBY_DEPLOY_PRIME_URL}/.netlify/functions/thumbnail${thumbnailQuery}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta name="generator" content="Wes Bos on Gatsby!" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@wesbos" />
      <meta name="twitter:creator" content="@wesbos" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={post.frontmatter.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={ogImage} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.frontmatter.title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={post.excerpt} />
      <meta
        property="article:published_time"
        content={new Date(post.frontmatter.date).toISOString()}
      />
      <meta property="og:site_name" content="Wes Bos" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_CA" />
    </Helmet>
  );
}
