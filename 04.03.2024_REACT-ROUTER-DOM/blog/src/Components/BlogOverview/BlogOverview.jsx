
import "./BlogOverview.css";
import blogData from '../../Pages/Blog/data';

const BlogOverview = (props) => {
    return (
        <section>
        {blogData.map((singleData, key) => (
                <article className="flex" key = {key}>
                    <div>
                        <img src={singleData.img_url} alt="IMAGE"></img>
                        <p>{singleData.title}</p>
                        <button onClick={() => props.setActive(key)}>Mehr Infos</button>
                    </div>
                </article>
            ))};
        </section>
    );
}
 
export default BlogOverview;