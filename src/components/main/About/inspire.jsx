import React from "react";

const Inspire = (props) => {
    return (
        <div className="about__item">
            <img className="about__image" src={props.image} height={100} width={100} />
            <h3 className="about__title subtitle">{props.title}</h3>
            <p className="about__content">{props.content}</p>
        </div>
    )
}

export default Inspire;