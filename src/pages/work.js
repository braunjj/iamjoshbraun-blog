import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Thumbnail from "../components/thumbnail"
import PostCollection from "../components/post-collection"

import SEO from "../components/seo"

const WorkIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const caseStudyData = data.caseStudies.nodes
  const visualDesignData = data.visualDesign.nodes
  const personalProjectData = data.personalProjects.nodes

  return (
    <Layout location="{location}" title={siteTitle} specialClass="block">
      <SEO title="Work" />
      <PostCollection
        post_data={caseStudyData} 
        section_title="Case Studies" 
        section_description="End-to-end product design"
        section_title_link=""
        section_title_link_text=""
        show_post_date="false"
        show_post_category="false"
      />  

      <PostCollection
        post_data={visualDesignData} 
        section_title="Visual Design" 
        section_description="User interface, branding, and identity design"
        section_title_link=""
        section_title_link_text="Check out my work"
        show_post_date="false"
        show_post_category="false"
      /> 

      <PostCollection
        post_data={personalProjectData} 
        section_title="Personal Projects" 
        section_description="Side projects and things I've built just for fun"
        section_title_link=""
        section_title_link_text="Check out my work"
        show_post_date="false"
        show_post_category="false"
      /> 

    </Layout>
  )
}

export default WorkIndex

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  caseStudies: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}, category: {eq: "Work"}, post_type: {eq: "Case Study"}}}) {
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
  visualDesign: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}, category: {eq: "Work"}, post_type: {eq: "Visual Design"}}}) {
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
   personalProjects: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}, category: {eq: "Work"}, post_type: {eq: "Personal Project"}}}) {
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
