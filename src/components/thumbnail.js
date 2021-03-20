import React from "react"
import { Link } from "gatsby"


const PostThumbnail = (props) => {
  console.log(props)
  const post = (props.post_data ? props.post_data : "There's no data")
  console.log(post);
  return (
  <Link to={post.fields.slug} itemProp="url" key={post.fields.slug} className="work-post article">
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <div className="thumbnail">
        {props.img}
      </div>
      <div className="body">
        <div className="wrapper">
          <h2 itemProp="headline">{post.frontmatter.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
          <div className="meta">
            { (props.collection_settings.show_post_date === "true") ? <p className="xsmall date">{post.frontmatter.date}</p> : ""}
            { (props.collection_settings.show_post_category === "true") ? <p className="xsmall category">#{post.frontmatter.post_type.replace(/ /g, '')}</p> : ""}
          </div>
        </div>
      </div>
    </article>
  </Link>
  )
}

export default PostThumbnail
