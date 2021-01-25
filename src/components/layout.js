import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation"
import Footer from "../components/footer"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Navigation/>

      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer/>

    </div>
  )
}

export default Layout
