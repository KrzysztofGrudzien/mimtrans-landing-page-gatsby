import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import data from "../data/data"
import { MdNotificationsActive } from "@react-icons/all-files/md/MdNotificationsActive"
import { MdSmartphone } from "@react-icons/all-files/md/MdSmartphone"
import { MdEmail } from "@react-icons/all-files/md/MdEmail"

const ActionNav = () => {
  const { actionLinks } = data
  const styles = {
    marginRight: "1rem",
  }

  const addIcon = (icon, iconFill, iconSize) => {
    if (icon === "MdNotificationsActive") {
      return (
        <MdNotificationsActive fill={iconFill} size={iconSize} style={styles} />
      )
    } else if (icon === "MdSmartphone") {
      return <MdSmartphone fill={iconFill} size={iconSize} style={styles} />
    } else {
      return <MdEmail fill={iconFill} size={iconSize} style={styles} />
    }
  }

  return (
    <ActionWrapper>
      <ActionContainer className="container">
        <ActionList>
          {actionLinks.map(
            ({ path, title, className, icon, iconFill, iconSize }, index) => {
              return (
                <ActionListItem key={index}>
                  <Link
                    to={path}
                    className={className}
                    activeClassName="navbar-link--active"
                  >
                    {addIcon(icon, iconFill, iconSize)}
                    {title}
                  </Link>
                </ActionListItem>
              )
            }
          )}
        </ActionList>
        <Link
          to="/aktualnosci"
          className="navbar--active-link navbar--active-link-mobile"
          activeClassName="navbar-link--active"
        >
          <MdNotificationsActive fill="#ff9f3d" /> Aktualności
        </Link>
      </ActionContainer>
    </ActionWrapper>
  )
}

const ActionWrapper = styled.div`
  background-color: #1e2a20;
  color: #fdfdfd;
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;

  a.navbar--active-link-mobile {
    color: #fdfdfd;
    align-items: center;
    display: flex;
    font-weight: 600;

    svg {
      font-size: 1.6rem;
      margin-right: 1rem;
    }
  }

  a.navbar--active-link-mobile {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`

const ActionList = styled.ul`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ActionListItem = styled.li`
  font-weight: 600;
  padding-left: 4rem;

  a {
    border-bottom: 2px solid #1e2a20;
    color: #fdfdfd;
    align-items: center;
    display: flex;
  }

  a.navbar-link--active {
    border-bottom: 2px solid #ff9f3d;
  }
`

export default ActionNav
