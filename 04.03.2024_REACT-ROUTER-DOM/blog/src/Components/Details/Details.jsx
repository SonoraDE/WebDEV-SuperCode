import "./Details.css";
import blogData from '../../Pages/Blog/data';

const Details = (props) => {
    const blogItem = blogData[props.id];
    return (
        <>
        <h1>{blogItem.title}</h1>
        <p>{blogItem.published_date}</p>
        <p>{blogItem.author}</p>
        <p>{blogItem.description}</p>
        <img src={blogItem.img_url} alt="IMAGE"></img>
        </>
    );
}
 
export default Details;
