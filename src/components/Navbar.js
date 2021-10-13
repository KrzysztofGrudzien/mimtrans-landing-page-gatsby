import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import data from "../data/data"

const Navbar = () => {
  const { navigation } = data

  return (
    <Header className="container">
      <nav className="navbar">
        <ul className="navbar-list">
          {navigation.map(({ className, path, title, linkClassName }) => {
            return (
              <li className={className}>
                <Link to={path} className={linkClassName}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </Header>
  )
}

const Header = styled.header`
  padding: 2rem 0;
`

export default Navbar
