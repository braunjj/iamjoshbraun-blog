import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostCollection from "../components/post-collection"

import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const blogData = data.blog.nodes

  return (
    <Layout location="{location}" title={siteTitle} specialClass="block">
      <SEO title="Work" />
      <PostCollection
        post_data={blogData} 
        section_title="Blog" 
        section_description="I'm Josh. I'm a designer, technologist, and coder. I write about design, tech, and my life."
        section_title_link=""
        section_title_link_text=""
        show_post_date="true"
        show_post_category="true"
      />  

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  blog: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}, category: {eq: "Blog"}}}) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        description
        published
        post_type
        date(formatString: "MMMM DD, YYYY")
        title
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
  }
}

`
