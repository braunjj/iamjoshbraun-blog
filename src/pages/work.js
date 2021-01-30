import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


const WorkIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location="{location}" title="Work">
        <SEO title="Work" />
        <div className="grid-title">
          <h1>Recent Posts</h1>
        </div>
        <div className="grid-content">
          <p>No posts found.</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout location="{location}" title={siteTitle}>
      <SEO title="Work" />
      <div className="grid-title">
        <h1>Case Studies</h1>
        <p>End-to-end product design and discovery</p>
      </div>
      <div className="grid-content">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            let featuredimage = post.frontmatter.featuredimage
            featuredimage = featuredimage ? <Img fixed={featuredimage.childImageSharp.fixed} fadeIn="false" alt={post.frontmatter.featuredimage_alt}/> : ""

            return (
              <Link to={post.fields.slug} itemProp="url" key={post.fields.slug} className="work-post article">
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div className="thumbnail">
                    {featuredimage}
                  </div>
                  <div className="body">
                    <div className="wrapper">
                      <h2 itemProp="headline">{title}</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </div>
                  </div>
                </article>
                </Link>

            )
          })}
      </div>
    </Layout>
  )
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {post_type: {eq: "Case Study"}}}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          description
          date(formatString: "MMMM DD, YYYY")
          title
          featuredimage {
            publicURL
            childImageSharp {
              fixed(width: 200, height: 200){
                  ...GatsbyImageSharpFixed
                }
            }
          }
          featuredimage_alt
        }
      }
    }
  }
`
