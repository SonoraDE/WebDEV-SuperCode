import "./Rating.css";

const Rating = (prop) => {
    let Stars = Math.round(prop.rate);
    let starIMG = "";
    for(let rating = 0; rating < Stars; rating++) {
        starIMG += "★";
    }
    for(let ratingempty = 0; ratingempty < (10 - Stars); ratingempty++) {
        starIMG += "☆";
    }
    return (
        <div>
            {starIMG}
        </div>
    );
}
 
export default Rating;