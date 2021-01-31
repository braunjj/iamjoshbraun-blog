import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Thumbnail from "../components/thumbnail"

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
      <Thumbnail posts={posts} post_type="Case Study" section_title="Case Studies" section_description="End-to-end product design"/>
      <Thumbnail posts={posts} post_type="Visual Design"  section_title="Visual Design" section_description="User interface, branding, and identity design"/>
      <Thumbnail posts={posts} post_type="Personal Project"  section_title="Personal Projects" section_description="Side projects and things I've built just for fun"/>
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
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          description
          post_type
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
