import React from "react";
import arrow from '../../../assets/images/arrow.png'

const Item = (props) => {
    return (
        <>
            <div className="payfeed__item">
                <img src={props.image} alt="" className="payfeed__image" />
                <p>{props.text}</p>
            </div>
            <img src={arrow} className="payfeed__arrow"></img>
        </>
    )
}

export default Item;