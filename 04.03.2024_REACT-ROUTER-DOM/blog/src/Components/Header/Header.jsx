import "./Header.css";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <section>
            <nav>
                <NavLink to ="/" >Startseite</NavLink>
                <NavLink to = "blog" >Blog</NavLink>
            </nav>
        </section>
    );
}
 
export default Header;