import "./Blog.css";
import BlogOverview from './../../Components/BlogOverview/BlogOverview';
import { useState } from "react";
import Details from "../../Components/Details/Details";

const Blog = () => {
    const [activeElement, setActiveElement] = useState(-1);
    return (
        <>
        {activeElement === -1 ? <BlogOverview setActive={setActiveElement}/> : <Details id={activeElement}/>}
        </>
    );
}
 
export default Blog;