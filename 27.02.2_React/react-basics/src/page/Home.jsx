import Boxes from "../components/Boxes/Boxes";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Skills from "../components/Skills/Skills";
import "./Home.css";

const Home = () => {
    return (
        <section className="wrapper">
            <Header/>
            <main>
                <div>
                    <h1 className="title">Hi, i am John Smith</h1>
                    <h2>A Front End Developer.</h2>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum perferendis harum minima veniam? Odio minima molestias perspiciatis architecto ea nostrum ad autem ipsam rem, mollitia vel sint animi hic officiis.</p>
                    <button>resume</button>
                </div>
                    <h3>PROJECTS</h3>
                    <Boxes/>
            </main>
            <Skills/>
            <Footer/>
        </section>
     );
}
 
export default Home;