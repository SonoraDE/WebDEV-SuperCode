import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Burger from "../../Components/Burger/Burger";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = () => {
    const location = useLocation();
    return (
        <nav className="navi">
            {location.pathname != "/" && 
            <div className="nav-content">
                <Link to="/" className="arrow"><ArrowBackIcon/></Link>
            </div> }
            <div className="nav-content">
                <Burger/>
            </div>
        </nav>
    );
}
 
export default Header;
