import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation"
import Footer from "../components/footer"


const PostLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  return (
    <div className="" data-is-root-path={isRootPath}>
      <Navigation/>

      <header className="global-header">{header}</header>
      <main className="app post">{children}</main>
      <Footer/>

    </div>
  )
}

export default PostLayout
