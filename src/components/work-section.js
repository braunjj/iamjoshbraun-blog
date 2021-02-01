import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"


const Post = () => {
  const data = useStaticQuery(graphql`
    query Post {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}, category: {eq: "Work"}}}) {
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
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Link to="/"><Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        /></Link>
      )}
      {author?.name && (
        <p className="small">Written by {author.name}. {` `}
        {author?.summary || null}{` `}
        <br/>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            Follow me on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
