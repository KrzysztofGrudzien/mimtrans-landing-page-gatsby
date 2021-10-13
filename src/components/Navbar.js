import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import data from "../data/data"
import { AiTwotoneCalendar } from "@react-icons/all-files/ai/AiTwotoneCalendar"
import { FaMoneyCheckAlt } from "@react-icons/all-files/fa/FaMoneyCheckAlt"

const Navbar = () => {
  const { navigation } = data
  const styles = {
    marginRight: "1rem",
  }

  return (
    <Header className="container">
      <nav className="navbar">
        <ul className="navbar-list">
          {navigation.map(
            (
              {
                className,
                path,
                title,
                linkClassName,
                icon,
                iconFill,
                iconSize,
              },
              index
            ) => {
              return (
                <li className={className} key={index}>
                  {icon === "AiTwotoneCalendar" ? (
                    <AiTwotoneCalendar
                      fill={iconFill}
                      size={iconSize}
                      style={styles}
                    />
                  ) : icon === "FaMoneyCheckAlt" ? (
                    <FaMoneyCheckAlt
                      fill={iconFill}
                      size={iconSize}
                      style={styles}
                    />
                  ) : null}
                  <Link to={path} className={linkClassName}>
                    {title}
                  </Link>
                </li>
              )
            }
          )}
        </ul>
      </nav>
    </Header>
  )
}

const Header = styled.header`
  padding: 2rem 0;
`

export default Navbar
