import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <a href='#'>Logo</a>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header