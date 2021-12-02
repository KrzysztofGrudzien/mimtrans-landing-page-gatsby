import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import data from "../data/data"
import { AiTwotoneCalendar } from "@react-icons/all-files/ai/AiTwotoneCalendar"
import { FaMoneyCheckAlt } from "@react-icons/all-files/fa/FaMoneyCheckAlt"
import { IoIosMenu } from "@react-icons/all-files/io/IoIosMenu"
import logo from "../assets/img/logo.svg"

const Navbar = () => {
  const { navigation } = data
  const styles = {
    marginRight: "1rem",
  }

  const addIcon = (icon, iconFill, iconSize) => {
    if (icon === "AiTwotoneCalendar") {
      return (
        <AiTwotoneCalendar fill={iconFill} size={iconSize} style={styles} />
      )
    } else if (icon === "FaMoneyCheckAlt") {
      return <FaMoneyCheckAlt fill={iconFill} size={iconSize} style={styles} />
    }
  }

  return (
    <Header className="container">
      <ImgWrapper>
        <img src={logo} alt="logo" />
      </ImgWrapper>
      <nav className="navbar navbar-desktop">
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
                  <Link
                    to={path}
                    className={linkClassName}
                    activeClassName="navbar-link--active"
                  >
                    {addIcon(icon, iconFill, iconSize)}
                    {title}
                  </Link>
                </li>
              )
            }
          )}
        </ul>
      </nav>
      <nav className="navbar navbar-mobile">
        <MenuIconBox>
          <IoIosMenu size="40" />
        </MenuIconBox>
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
                  <Link
                    to={path}
                    className={linkClassName}
                    activeClassName="navbar-link--active"
                  >
                    {addIcon(icon, iconFill, iconSize)}
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
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  a {
    align-items: center;
    display: flex;
  }
`

const MenuIconBox = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 2000;
`

const ImgWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 300px;
`

export default Navbar
