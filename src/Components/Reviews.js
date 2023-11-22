import '../Stylesheets/Reviews.css'
import { useState } from 'react';
export default function Reviews() 
{
    const [reviewIndex, setReviewIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false);
    const reviews = [
        { text: "Great service and friendly staff!", author: "Jane Doe" },
        { text: "Loved the ambiance and the food was delicious.", author: "John Smith" },
        { text: "Loved the ambiance and the food was delicious. Loved the ambiance and the food was delicious. Loved the ambiance and the food was delicious.Loved the ambiance and the food was delicious. Loved the ambiance and the food was delicious. Loved the ambiance and the food was delicious." , author: "Steven Seagal" },
        { text: "Super Wonderful stuff" , author: "LeBron James" },
        // ... more reviews
    ];

 

    function moveright() {       
        setReviewIndex((prev)=> ((1 + prev) % reviews.length ))        
    }
    function moveleft() {
        setReviewIndex((prev)=> (  (prev-1+ reviews.length) % reviews.length ))}
return(
    <div className="ReviewsContainer">
         <button onClick={moveleft }> &lt; </button>
         <div className="ReviewText">
                <p>{reviews[reviewIndex].text}</p>
                <div className="Rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
                <p className="ReviewAuthor">- {reviews[reviewIndex].author}</p>
            </div>
            <button onClick={moveright}>&gt;</button>

    </div>
);
}