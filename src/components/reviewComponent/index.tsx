import React from 'react';
import './reviewComponent.css';;
import right_pattern from '../../assets/right_pattern.svg';
import left_pattern from '../../assets/left_pattern.svg';


const ReviewComponent = ({ review }: any) => {
    return (
        <div className={`review_component ${review.reverse && "reversed"}`}>
            <div className="review_container">
                <div className="review_wrapper">
                    <div className="review_wrapper_top">
                        <h2>{review.author}</h2>
                        <p>{review.date}</p>
                    </div>
                    <div className="review_wrapper_bottom">
                        <p className="review_text">{review.text}</p>
                    </div>
                   
                </div>
            </div>
            <div className={`svg_pattern_container ${review.reverse && "reversed"}`}>
                {!review.reverse && <img src={right_pattern} alt="svg pattern" />}
                {review.reverse && <img src={left_pattern} alt="svg pattern" />}
            </div>
        </div>
    )
}

export default ReviewComponent;