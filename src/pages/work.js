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
        <Bio />
        <p>
          No posts found.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location="{location}" title={siteTitle}>
      <SEO title="Work" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          let featuredimage = post.frontmatter.featuredimage
          featuredimage = featuredimage ? <Img fluid={featuredimage.childImageSharp.fluid} alt={post.frontmatter.featuredimage_alt}/> : ""

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                </header>
                <section>
                  {featuredimage}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
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
              fluid(maxWidth: 1024){
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
