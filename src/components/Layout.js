import React from "react"
import Navbar from "./Navbar"
import ActionNav from "./ActionNav"
import Footer from "./Footer"
import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <ActionNav />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
