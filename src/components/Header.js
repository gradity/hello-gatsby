import React from "react"
import { Link } from "gatsby"

import {
  navbar,
  logo,
  cta,
  navLink,
  navLinkItem,
  navLinkText,
} from "./header.module.scss"

function Header() {
  return (
    <nav className={navbar}>
      <Link to="/" className={(navLinkItem, logo)}>
        LOGO.
      </Link>
      <ul className={navLink}>
        <li className={navLinkItem}>
          <Link to="/portfolio" className={navLinkText}>
            Portfolio
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
      </ul>
      <div className={cta}>Contact Us</div>
    </nav>
  )
}

export default Header
