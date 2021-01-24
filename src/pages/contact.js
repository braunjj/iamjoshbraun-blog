import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Home extends Component {

  render() {
    return (
      <Layout location="contact" title="Josh Braun">
      <SEO title="Contact" />

        <h1>Say Hello 👋🏻</h1>
        <p>Complete the form below or reach out via email at <a href="mailto:josh@iamjoshbraun.com">josh@iamjoshbraun.com</a>.</p>

        <form name="contact" netlify action="contact#success">
        <p>
          <label>Name <input tabindex="1" type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input tabindex="2" type="email" name="email" /></label>
        </p>
        <p>
          <label>Note <textarea tabindex="3" name="note"/></label>
        </p>
        <p>
          <button id="send" tabindex="4" type="submit">Send</button>
        </p>
      </form>
      </Layout>
      )
    }
}
