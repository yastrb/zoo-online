import React from "react";
import SimpleForm from "./Form";



const Contact = () => {

    return (
        <section className="contact section">
            <div className="contact__container container">
                <h2 className="aboutus__title section__title">Contact us</h2>
                <p>We welcome your comments and questions. A member of our team will respond as soon as possible. Please note that explore does not accept unsolicited proposals or requests for funding.</p>
                <SimpleForm/>
            </div>
        </section>
    )
}

export default Contact;