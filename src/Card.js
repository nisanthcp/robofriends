import React from "react";
import './Card.css';

const Card = ({ id, name, email }) => {
    return (
        
        <div key={id} className=" dib br3 pa3 ma2 grow bw2 shadow-1" >  
            {/* bg-light-blue */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>

        </div>
    )

}

export default Card;