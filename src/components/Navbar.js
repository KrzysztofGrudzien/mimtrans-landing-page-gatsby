import * as React from "react"
import {Link} from 'gatsby';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                    <Link to="/onas">O nas</Link>
                    <Link to="/uslugi">Usługi</Link>
                    <Link to="/partnerzy">Partnerzy</Link>
                    <Link to="/rekomendacje">Rekomendacje</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
