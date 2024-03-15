import { useState } from "react";
import "./ToTop.css";

const ToTop = () => {

    const [toggle, setToggle] = useState("none");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setToggle("block");
    } else {
        setToggle("none");
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    
    }

    return (
        <>
            <button onClick={() => topFunction()} style={{display: toggle}} id="myBtn" title="Go to top">Top</button>
        </>
    );
}
 
export default ToTop;