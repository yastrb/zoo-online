import React, { useState } from 'react';
import { useFormik, validateYupSchema } from "formik";

import * as Yup from "yup";


const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            terms: '',
        },
    });

 validateYupSchema:
        Yup.object({
        name: Yup.string()
            .min(4, "4 letee")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        terms: Yup.array().required('Terms of service must be checked'),

    });

    const [btn, setBtn] = useState('send message');

    console.log(formik.values);

    return (
        <div className='footer__contact'>
            <h3 className="footer__title">Contact Us</h3>

            <form
                onSubmit={formik.handleSubmit}
                className='footer__form'>

                <div className='footer__form-group'>
                    <input className='footer__form-control'
                        type="text"
                        id='name'
                        placeholder='Enter your name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className='footer__form-group'>
                    <input className='footer__form-control'
                        type="email"
                        id='email'
                        placeholder='Enter your email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className='footer__form-group'>
                    <textarea className='footer__form-control footer__form-email'
                        type="text"
                        id='message'
                        value={formik.values.text}
                        onChange={formik.handleChange}
                        placeholder='Please enter your message'
                    />
                </div>

                <div className='footer__form-group' style={{ display: "flex" }}>
                    <div style={{ marginRight: "5px" }}>
                        <input type="checkbox"
                            name='terms'
                            value="checked"
                        />
                    </div>
                    <label>I agree to the processing of Personal Data</label>
                </div>
                <div className='footer__form-group  footer__form-button'>
                    <button onClick={() => setBtn('done!')} className='form-button' type="submit" >{btn}</button>
                </div>
            </form>
        </div>
    )
}

export default Contact