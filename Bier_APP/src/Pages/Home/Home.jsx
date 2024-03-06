import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <section className="home-container">
                <div className="home-product">
                    <img className="home-img" src="./2.jpg" alt="BEER IMG" />
                    <Link to="/overview" className="link">ALL BEERS</Link>
                    <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat ab blanditiis accusantium. Libero enim est error at doloremque! Suscipit laboriosam qui neque atque nostrum excepturi labore quae aspernatur sequi?</p>
                </div>
                <div className="home-product">
                    <img className="home-img" src="./1.jpg" alt="BEER IMG" />
                    <Link to="/beer/random" className="link">RANDOM BEER</Link>
                    <p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit hic est vel quo aut vitae at illum ipsum laboriosam aspernatur? Quia dolorem deleniti laboriosam autem, ut eos voluptatibus aut optio.</p>
                </div>
            </section>
        </>
    );
}
 
export default Home;