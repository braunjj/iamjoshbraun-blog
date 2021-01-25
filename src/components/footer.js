import React, { Component } from 'react';
import { Link } from "gatsby"

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const year = new Date().getFullYear()

    return (
        <footer>
          <div className="social_links">
              <a title="Twitter" className="button" target="blank" href="https://twitter.com/iamjoshbraun"><img src="/img/social/twitter.svg"/></a>
              <a title="Instagram" className="button" target="blank" href="https://www.instagram.com/iamjoshbraun/"><img src="/img/social/instagram.svg"/></a>
              <a title="Linkedin" className="button" target="blank" href="https://www.linkedin.com/in/joshuajbraun/"><img src="/img/social/linkedin.svg"/></a>
              <a title="Dribbble" className="button" target="blank" href="https://dribbble.com/iamjoshbraun"><img src="/img/social/dribbble.svg"/></a>
              <a title="Messenger" className="button" target="blank" href="https://www.messenger.com/t/joshuajbraun"><img src="/img/social/messenger.svg"/></a>
          </div>
          <div id="copyright">
              <p>© <span id="year">{year}</span> Josh Braun</p>
          </div>
        </footer>
      )
    }
}
