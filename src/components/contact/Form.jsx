import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const SimpleForm = () => {

    const initialValues = {
        name: '',
        email: '',
        reason: 'Please select one...',
        text: '',
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        text: Yup.string().required()
    })

    function handleSubmit(values, actions) {
        // setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     actions.setSubmitting(false);
        // }, 1000);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {props => {
                console.log(props)
                return (
                    <Form className="contact__form form">
                        <div className="form__item">
                            <label htmlFor="name" className="form__label">Name</label>
                            <Field
                                className="form__input"
                                placeholder="Name"
                                type="text"
                                name="name"
                            // value={props.values.name}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            />
                        </div>

                        <div className="form__item">
                            <label className="form__label">
                                Email
                            </label>
                            <Field
                                className="form__input"
                                placeholder="Email"
                                type="email"
                                name="email"
                            // value={props.values.email}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            />
                        </div>

                        <div className="form__item">
                            <label htmlFor="contact" className="form__label">
                                What's your reason for contacting us?
                            </label>
                            <Field
                                as="select"
                                className="form__input"
                                name="reason"
                            >
                                <option value="">Please select one...</option>
                                <option value="General Inquires">General Inquires</option>
                                <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                                <option value="Internships">Internships</option>
                                <option value="Jobs">Jobs</option>
                                <option value="Partnership">Partnership</option>
                                <option value="Press Inquires">Press Inquires</option>
                                <option value="Research">Research</option>
                            </Field>
                        </div>

                        <div className="form__item">
                            <label className="form__label" htmlFor="">Share your thoughts.</label>
                            <Field
                            as ="textarea"
                                className="form__input"
                                name="text"
                                // value={props.values.text}
                                // onChange={props.handleChange}
                                // onBlur={props.handleBlur}
                                >
                            </Field>
                        </div>
                        <button type="submit" className="button">Submit</button>
                    </Form>
                )
            }}

        </Formik>
    )
}

export default SimpleForm;