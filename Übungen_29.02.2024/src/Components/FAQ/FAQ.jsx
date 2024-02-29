import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
    const [faq, faqState] = useState(false);
        console.log(faq);  
    return (
        <>
        <div className="container">
            <div>
                <p>Why is React great?</p>
            </div>
            <div>
                <button onClick={() => faqState((faq) => !faq)}>⬍</button>
            </div>
        </div>
        {faq && (
                <div className="container">
                    <p>Because Reazy have a big Cock</p>
                </div>
            )}
        </>
    );
}
 
export default FAQ;