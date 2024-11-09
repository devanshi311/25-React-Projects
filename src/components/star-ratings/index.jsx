
import { FaStar } from "react-icons/fa"
import { useState } from "react";
export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setRating(getCurrentIndex);

    }

    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex);

    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;

                    return
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' :'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    />
                })
            } 
        </div>
    )
}