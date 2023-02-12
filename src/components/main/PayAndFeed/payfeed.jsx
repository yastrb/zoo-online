import React from "react";
import Item from "./item";
import Button from './../Button/button';
import image1 from '../../../assets/images/card.png';
import image2 from '../../../assets/images/zoo.png';
import image3 from '../../../assets/images/panda.png';
import Modal from "../../modal/modal";
import { useState } from "react";
const data = [
    {
        id: 1,
        image: image1,
        text: 'You pay with a VISA card',
    },
    {
        id: 2,
        image: image2,
        text: 'Payment goes to the Zoo',
    },
    {
        id: 3,
        image: image3,
        text: 'Panda gets the bamboo',
    },
]

const PayFeed = () => {
    const [modalActive, setModalActive] = useState(false )
    return (
        <div className="payfeed">
            <div className="payfeed__container container">
                <h2 className="payfeed__title section__title">Pay and feed</h2>
                <span>The opportunity to easily and naturally (but as often as possible) donate to the needs of animals that you like.</span>
                <div className="payfeed__items">
                    {data.map(item => (
                        <Item key={item.id} image={item.image} text = {item.text} />
                    ))}
                </div>
                {/* <Button content={"donate"} /> */}
                <button className="button" onClick={()=> setModalActive(true)}>FEED</button>
                    <Modal active={modalActive} setActive={setModalActive}></Modal>
            </div>
        </div>
    )
}

export default PayFeed;

