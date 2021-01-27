import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Home extends Component {

  render() {
    return (
      <Layout location="contact" title="Josh Braun">
      <SEO title="Contact" />

        <div class="page_hero">
          <h1>Say Hello 👋🏻</h1>
          <p>Complete the form below or reach out via email at <a href="mailto:hello@iamjoshbraun.com">hello@iamjoshbraun.com</a>.</p>
        </div>

        <form id="contact" name="contact" netlify action="contact#success">
        <p>
          <label>Name <input tabindex="1" type="text" name="name" placeholder="Johny Appleseed"/></label>
        </p>
        <p>
          <label>Email <input tabindex="2" type="email" name="email" placeholder="Johny Appleseed"/></label>
        </p>
        <p>
          <label>Note <textarea tabindex="3" rows="4" name="note" placeholder="What's up?"/></label>
        </p>
        <p>
          <button id="send" tabindex="4" type="submit">Send</button>
        </p>
      </form>
      </Layout>
      )
    }
}
