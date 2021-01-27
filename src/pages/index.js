import React, { Component } from 'react';
import Layout from "../components/layout"
import Image from "gatsby-image"

import SEO from "../components/seo"

export default class Home extends Component {

  render() {
    return (
      <Layout location="home" title="Josh Braun">
      <SEO title="Home" />
      <div id="homepage_hero">
      <figure id="homepage_profile">
        <img src="/img/joshbraun.jpg"/>
      </figure>
        <div id="hero_content">
          <h1>Howdy, I’m Josh – a product designer & developer located in NYC.</h1>
          <p>
            I’m currently designing machine learning business process automation
            tools at <a target="blank" href="https://www.hyperscience.com">Hyperscience</a>.
          </p>
          <p>
              Previously, I designed digital experiences for brands like Lowe’s and Lincoln Financial Group at <a target="blank" href="https://www.gmrmarketing.com">GMR</a>. I also led the design of a point-of-sale iOS app for a Fortune 500. Later, I joined retail startup <a target="blank" href="http://www.fourpost.com">Fourpost</a> (acquired in 2019) to help build a modern brick and mortar brand platform.

          </p>
          <p>I love working with early stage startups and new technologies.</p>
          <a title="contact me" class="button" href="../contact">Contact Me</a>
          </div>
        </div>
      </Layout>
      )
    }
}
