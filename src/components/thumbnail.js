import React, { Component } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"


export default class Thumbnail extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const posts = this.props.posts
    console.log(posts)

    return (
        <section>
        <div className="grid-title">
          <h1>{this.props.section_title}</h1>
          <p>{this.props.section_description}</p>
        </div>
        <div className="grid-content">
            {posts.filter(post => post.frontmatter.post_type === this.props.post_type).map(filteredPost => {
              const title = filteredPost.frontmatter.title || filteredPost.fields.slug
              let featuredimage = filteredPost.frontmatter.featuredimage
              featuredimage = featuredimage ? <Img fixed={featuredimage.childImageSharp.fixed} fadeIn="false" alt={filteredPost.frontmatter.featuredimage_alt}/> : ""

              return (
                <Link to={filteredPost.fields.slug} itemProp="url" key={filteredPost.fields.slug} className="work-post article">
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <div className="thumbnail">
                      {featuredimage}
                    </div>
                    <div className="body">
                      <div className="wrapper">
                        <h2 itemProp="headline">{title}</h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: filteredPost.frontmatter.description || filteredPost.excerpt,
                          }}
                          itemProp="description"
                        />
                      </div>
                    </div>
                  </article>
                  </Link>

              )
            })}
        </div>
        </section>
      )
    }
}
