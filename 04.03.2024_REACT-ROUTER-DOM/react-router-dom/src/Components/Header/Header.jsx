import "./Header.css";
import {NavLink, Link} from "react-router-dom";

const Header = () => {
    return (
        <section>
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="speisen">Speisekarte</NavLink>
            <NavLink to="oeffnungszeiten">Öffnungszeiten</NavLink>
            </nav>
        </section>
    );
}
 
export default Header;