import React from "react"
import Navbar from "./Navbar"
import ActionNav from "./ActionNav"
import Footer from "./Footer"
import "../sass/main.scss"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <>
      <ActionNav />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        <main className="main">{children}</main>
      </motion.div>
      <Footer />
    </>
  )
}

export default Layout
