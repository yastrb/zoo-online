import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Modal from "../../modal/modal";
import { useState } from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import Button from "../../main/Button/button";

const Animal = (props) => {

    const [modalActive, setModalActive] = useState(false )

    const { title } = props.props
    const { population } = props.props
    const { habitat } = props.props
    const { diet } = props.props
    const { embedId } = props.props


    return (
        <>
            <h2 className="zoo__title">{title}</h2>
            <div className="zoo__main-container">
                <YoutubeEmbed embedId={embedId} />
                <div className="zoo__main-content">
                    <h3>Population:</h3>
                    <p>{population}</p>
                    <h3>Habitat:</h3>
                    <p>{habitat}</p>
                    <h3>Diet:</h3>
                    <p>{diet}</p>
                    <Button onClick = {()=> setModalActive(true)}  content={'feed'} />
                    <Modal active={modalActive} setActive={setModalActive}></Modal>
                </div>
            </div>
        </>
    )
}

export default Animal