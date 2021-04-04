import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostMetaData from "../components/post-meta-data"


const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  let featuredimage = post.frontmatter.featuredimage

  let slug = post.fields.slug.split('/')[2];
  slug = slug.toLowerCase()
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return (
    <Layout location={location} title={siteTitle} specialClass="post">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="breadcrumb flex">
        <Link className="" to = "/">Home</Link> <p>/</p><Link className="" to = {"/" + post.frontmatter.category.toLowerCase() + "/"}>{post.frontmatter.category}</Link><p>/</p><p>{slug}</p> 
      </div>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p itemProp="description">{post.frontmatter.description}</p>
          {post.frontmatter.category === "Work" ? <PostMetaData timeline={post.frontmatter?.timeline} team={post.frontmatter?.team}/> : ""}
        
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <div>
          <Bio />
        </div>
        <a className="button" href="#main">Scroll to Top</a>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        post_type
        category
        timeline
        team
        featuredimage {
          publicURL
          childImageSharp {
              fluid(maxWidth: 740, maxHeight: 240) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        featuredimage_alt
      }
      fields {
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
