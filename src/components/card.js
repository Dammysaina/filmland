import React from "react";

const Card = () => {
    return (
        <div>
            <div>
                <img src={props.image} alt="service"></img>
                <p></p>
                <img></img>
            </div>
            <div className="selection_text">
                <h1>{props.header}</h1>
                <p>{props.body}</p>
                <div>
                    <div>
                        <img></img>
                        <p></p>
                    </div>
                    <div>
                        <img></img>
                        <p></p>
                    </div>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default Card