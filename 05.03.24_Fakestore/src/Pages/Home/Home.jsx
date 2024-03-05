import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-div">
                <h1 className="title-home">FAKE SHOP</h1>
                <h2 className="slogan-home">MIT NUR EINEM KLICK GEHT ES ZU DEN PRODUKTEN</h2>
                <Link to="/overview"><button className="btn">PRODUKTÜBERSICHT</button></Link>
            </div>
        </section>
    );
}
 
export default Home;