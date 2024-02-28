import "./Header.css";

const Header = (props) => {
    return (  
        <header>
            <h2>{props.logo}</h2>
            <nav>
                <a href="#">{props.title}</a>
                <a href="#">{props.title2}</a>
                <a href="#">{props.title3}</a>
            </nav>
        </header>
    );
}

 
export default Header;