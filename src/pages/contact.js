import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Home extends Component {
  
  handleSubmit(){
    alert("Thank you!");
  }

  render() {
    return (
      <Layout location="contact" title="Josh Braun">
      <SEO title="Contact" />

        <div className="grid-title">
          <h1>What's up? 👋</h1>
          <p>Complete the form or reach out via email at <a href="mailto:josh@iamjoshbraun.com">josh@iamjoshbraun.com</a>.</p>
        </div>

        <form className="grid-content" id="contact" name="contact" method="POST" data-netlify="true" netlify-honeypot="last_name" action="/work">
        <p>
          <label>Name <input tabindex="1" type="text" name="name" placeholder="Elon Musk"/></label>
        </p>
        <p>
          <label>Email <input tabindex="2" type="email" name="email" placeholder="elon@spacex.com"/></label>
        </p>
        <p>
          <label>Note <textarea tabindex="3" rows="4" name="note" minlength="5" placeholder="What's up?"/></label>
        </p>
        <p class="hidden">
          <label>Last Name<input tabindex="4" name="last_name" /></label>
        </p>
          <button id="send" tabindex="5" type="submit" onSubmit={this.handleSubmit}>Send</button>
      </form>
      </Layout>
      )
    }
}
