import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import PostThumbnail from "../components/thumbnail"



const PostCollection = (props) => {
  const posts = props.post_data;
  const post_count = posts.length

  return (
    <section class="flex">
        <div className="grid-title">
          <h1>{props.section_title}</h1>
          <p>{props.section_description}</p>
          <Link to={props.section_title_link}> {props.section_title_link? props.section_title_link_text : ""}</Link>
        </div>
        <div className="grid-content">
          {(post_count === 0 ? <p className="empty_collection small">This collection has no posts</p> : "")}
          
          {posts.map(filteredPost => {
              let featuredimage = filteredPost.frontmatter.featuredimage
              featuredimage = featuredimage ? <Img fluid={featuredimage.childImageSharp.fluid} fadeIn="false" alt={filteredPost.frontmatter.featuredimage_alt}/> : ""
              
              return (
                
                <PostThumbnail post_data={filteredPost} img={featuredimage} collection_settings={props}/>
              )
            })}
        </div>
    </section>
  )
}

export default PostCollection
