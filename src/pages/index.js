import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { Link } from "gatsby"
import PostCollection from "../components/post-collection"


import SEO from "../components/seo"

export const Home = ({ data, location }) => {
    
    const avatar = data?.avatar?.childImageSharp?.fluid
    const featuredPostData = data.featured.nodes
    const blogPostData = data.blog.nodes

    return (
      <Layout location="home" title="Josh Braun" specialClass="block">
      <SEO title="Home" />
      <section class="flex">
      <div className="grid-title">
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
          I’m currently a design lead at <a target="blank" href="https://www.elementl.com">Elementl</a>, building an open source data orchestration platform called Dagster.
          </p>
          <p>
          I previously helped build machine learning and automation tools at <a target="blank" href="https://www.hyperscience.com">Hyperscience</a> and designed digital experiences for brands like Lowe’s and Lincoln Financial Group at <a target="blank" href="https://www.gmrmarketing.com">GMR</a>.

          </p>
          <p>I love working with early stage startups and new technologies.</p>
            <Link to="/contact/" title="contact" class="button">👋 Say Hello </Link>
          </div>
          </section>
          <section class="flex">
            <div className="grid-title">
                <h1 className="icon">👨🏻‍🔬</h1>
                <h2>I'll help validate <br></br>your ideas.</h2>
                <p className="small">I might lead a risk assessment workshop, plot out a journey map, run a user interview, or build a prototype to test. We'll rinse and repeat until confident.
</p>
            </div>
            <div className="grid-title">
              <h1 className="icon">👨🏻‍🎨</h1>
              <h2>I'll help bring your product to life.</h2>
              <p className="small">Whether we’re optimizing one flow or developing a complete design system, I’ll craft accessible interactions that your users love and trust.</p>
            </div>
            <div className="grid-title">
              <h1 className="icon">👨🏻‍💻</h1>
              <h2>I'll help build & iterate your roadmap.</h2>
              <p className="small">I build things for the web in HTML, CSS/SCSS, and Javascript + frameworks like React and Gatsby. For E-commerce projects, I like Shopify. </p>
            </div>
          </section>
          
            <PostCollection
              post_data={featuredPostData} 
              section_title="Featured Projects" 
              section_description="Some of my favorite projects"
              section_title_link="/work/"
              section_title_link_text="View all Projects"
              show_post_date="false"
              show_post_category="true"
            />
            <PostCollection
                post_data={blogPostData} 
                section_title="Blog" 
                section_description="The latest from my blog"
                section_title_link="/blog/"
                section_title_link_text="View all Posts"
                show_post_date="true"
                show_post_category="true"
              />
      </Layout>
      )
  }

  export default Home

  export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featured: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}, category: {eq: "Work"}, featured: {eq: true}}}, limit: 2) {
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
    blog: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}, category: {eq: "Blog"}}}, limit: 1) {
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