import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"



import SEO from "../components/seo"

export const Home = () => {

    const data = useStaticQuery(graphql`
      query ProfileQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    const avatar = data?.avatar?.childImageSharp?.fluid

    return (
      <Layout location="home" title="Josh Braun">
      <SEO title="Home" />
      <div className="grid-title extended">
        <Image className="homepage-hero"
          fluid={avatar}
          fadeIn= "false"
          alt="Josh Braun"
          loading="eager"
        />
      </div>
        <div className="grid-content homepage-hero">
          <h1>Hello, I’m Josh – a product designer & developer located in NYC.</h1>
          <p>
            I’m currently designing machine learning business process automation
            tools at <a target="blank" href="https://www.hyperscience.com">Hyperscience</a>.
          </p>
          <p>
              Previously I also led the design of a point-of-sale iOS app for a Fortune 500, and I designed digital experiences for brands like Lowe’s and Lincoln Financial Group at <a target="blank" href="https://www.gmrmarketing.com">GMR</a>.

          </p>
          <p>I love working with early stage startups and new technologies.</p>
          <Link to="/work/" title="work" class="button">Check out my work</Link>
          </div>
      </Layout>
      )
  }

  export default Home
