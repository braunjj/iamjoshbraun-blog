import React from "react"
import * as Unicons from '@iconscout/react-unicons';

const PostMetaData = (props) => {
    return (
    <table className="project_meta">
    <thead>
      <tr>
        <td><Unicons.UilCalendarAlt size="24" color="#333333"/>Timeline:</td>
        <td><Unicons.UilUserCircle size="24" color="#333333"/>Team:</td>
      </tr>
    </thead>
    <tr>
      <td>{props.timeline}</td>
      <td>{props.team}</td>
    </tr>
    </table>
    )
}
    

export default PostMetaData
