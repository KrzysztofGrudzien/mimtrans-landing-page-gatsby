import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Hero from "../components/Hero"

const Error = () => {
  return (
    <>
      <Layout>
        <Hero type="partners" />
        <h2>Strona 404</h2>
        <h3>Ta strona nie istnieje</h3>
        <Link to="/" className="btn btn-primary">
          Powrót do strony głównej
        </Link>
      </Layout>
    </>
  )
}

export default Error
