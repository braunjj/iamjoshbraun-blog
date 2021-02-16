import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import * as Unicons from '@iconscout/react-unicons';


import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  let featuredimage = post.frontmatter.featuredimage

  return (
    <Layout location={location} title={siteTitle} specialClass="post">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Link className="button" to = "/work/">« All Work</Link>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p itemProp="description">{post.frontmatter.description}</p>
          <table className="project_meta">
          <thead>
            <tr>
              <td><Unicons.UilCalendarAlt size="24" color="#333333"/>Timeframe:</td>
              <td><Unicons.UilUserCircle size="24" color="#333333"/>Team:</td>
            </tr>
          </thead>
          <tr>
            <td>{post.frontmatter?.timeline}</td>
            <td>{post.frontmatter?.team}</td>
          </tr>
          </table>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <div>
          <Bio />
        </div>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
