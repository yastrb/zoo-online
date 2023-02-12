import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import About from './../main/About/about';
import image from "../../assets/images/sidebar.png"



export default function Modal({ active, setActive, children }) {
    const initialValues = {
        animal: '',
        donate: '',
        name: '',
        email: '',
        phone: '',
        card: '',
        date: '',
        cvc: '',
    }

    const validationSchema = Yup.object().shape({
        // animal: Yup.string().required("required"),
        donate: Yup.number().required("Please enter the amount"),
        name: Yup.string().min(3, "Too Short").required("Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        phone: Yup.number().min(11).required(),
        card: Yup.number().min(16, "Too Short").required("Please enter a valid card number"),
        // date: Yup.number().required("required"),
        cvc: Yup.number().min(3, "Too Short").required("Required"),
    })

    function handleSubmit(values, actions) {
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__container active" : "modal__container"} onClick={e => e.stopPropagation()}>
                {/* {children} */}
                <div className="modal__sidebar">
                    <img className='modal__img' src={image} alt="image" />
                </div>
                <div className="modal__wrapper">
                    <h2 className="modal__title">Donate for your animal </h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {props => {
                            console.log(props)
                            return (
                                <Form>
                                    <div className="modal__items-1">
                                        {/* --animal---- */}
                                        <div className="modal__item">
                                            <label className='modal__label'>Choose an animal</label>
                                            <Field
                                                as="select"
                                                className="modal__input"
                                                name="animal"
                                            >
                                                <option value="Zebra">Zebra</option>
                                                <option value="Tiger">Tiger</option>
                                                <option value="Zebra">Zebra</option>
                                                <option value="Tiger">Tiger</option>
                                            </Field>
                                            {/* <ErrorMessage name="animal" /> */}
                                        </div>
                                        {/* ---donate---- */}
                                        <div className="modal__item">
                                            <label className="modal__label">To donate</label>
                                            <Field
                                                className="modal__input"
                                                type="text"
                                                name="donate" />
                                            <ErrorMessage component="div" className="error" name="donate" />
                                        </div>

                                    </div>

                                    <div className="modal__block">
                                        <div className="modal__items-2">

                                            <div className="modal__title">About You</div>
                                            {/* ------name--------- */}
                                            <div className="modal__item">
                                                <label className="modal__label">Name</label>
                                                <Field
                                                    className="modal__input"
                                                    type="text"
                                                    name="name" />
                                                <ErrorMessage component="div" className="error" name="name" />
                                            </div>
                                            {/* -----email------------ */}
                                            <div className="modal__item">
                                                <label className="modal__label">Email</label>
                                                <Field
                                                    className="modal__input"
                                                    type="text"
                                                    name="email" />
                                                <ErrorMessage component="div" className="error" name="email" />
                                            </div>
                                            {/* ------phone---------- */}
                                            <div className="modal__item">
                                                <label className="modal__label">Phone</label>
                                                <Field
                                                    className="modal__input"
                                                    type="text"
                                                    name="phone" />
                                                <ErrorMessage component="div" className="error" name="phone" />
                                            </div>
                                        </div>

                                        <div className="modal__items-3">
                                            <div className="modal__title">Chekout</div>
                                            {/* ---card------------------ */}
                                            <div className="modal__item">
                                                <label className="modal__label">Card Number</label>
                                                <Field
                                                    className="modal__input"
                                                    type="text"
                                                    name="card" />
                                                <ErrorMessage component="div" className="error" name="card" />
                                            </div>
                                            {/* ----exp------- */}
                                            <div className="modal__item">
                                                <label className="modal__label">Expiry Date</label>
                                                <div className="date__item">
                                                    <Field
                                                        as="select"
                                                        className="modal__input date"
                                                        type="text"
                                                        name="date">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </Field>
                                                    <Field
                                                        as="select"
                                                        className="modal__input date"
                                                        type="text"
                                                        name="date">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="01">01</option>
                                                        <option value="01">01</option>
                                                        <option value="01">01</option>
                                                        <option value="01">01</option>
                                                        <option value="01">01</option>
                                                        <option value="01">01</option>
                                                        <option value="01">01</option>
                                                        <option value="01">01</option>
                                                        <option value="01">01</option>
                                                    </Field>
                                                </div>

                                            </div>
                                            {/* ----cvc---------- */}
                                            <div className="modal__item">
                                                <label className="modal__label">cvc</label>
                                                <Field
                                                    className="modal__input"
                                                    type="text"
                                                    name="cvc" />
                                                <ErrorMessage  component="div" className="error" name="cvc" />
                                            </div>
                                        </div>
                                    </div>

                                </Form>
                            )
                        }}

                    </Formik>
                    <div className="modal__content">If don’t cancel your subscription before the trial ends on April 15, 2021, you agree that you will automatically be charged</div>
                    <button type="submit" className='button'>DONATE</button>
                </div>
            </div>
        </div >
    )
}
