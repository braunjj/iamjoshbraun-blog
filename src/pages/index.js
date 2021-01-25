import React, { Component } from 'react';
import Layout from "../components/layout"
import CaseStudies from "../components/work_case_studies"

import SEO from "../components/seo"

export default class Home extends Component {

  render() {
    return (
      <Layout location="contact" title="Josh Braun">
      <SEO title="Contact" />

        <h1>Hello, I'm Josh</h1>
        <p>Welcome to my site</p>

        <CaseStudies/>
      </Layout>
      )
    }
}
