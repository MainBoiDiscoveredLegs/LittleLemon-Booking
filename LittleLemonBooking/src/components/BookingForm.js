import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function BookingForm(props) {
    const initialValues = {
        date: '',
        time: '',
        guests: '',
        occasion: '',
        location: '',
        specialRequests: ''
    };

    const validationSchema = Yup.object({
        date: Yup.string().required('Please choose a date.'),
        time: Yup.string().required('Please select a time.'),
        guests: Yup.number()
            .min(1, 'At least 1 guest.')
            .max(20, 'Maximum 20 guests.')
            .required('Please enter number of guests.'),
        occasion: Yup.string().required('Please select an occasion.'),
        location: Yup.string().required('Please select a location.'),
        specialRequests: Yup.string().max(200, 'Max 200 characters allowed.')
    });

    const handleSubmit = (values, { resetForm }) => {
        props.submitForm(values);
        resetForm();
    };

    return (
        <header>
            <div className="fheader">
                <section>
                    <div className="fbanner">
                        <h2>Reserve a Table</h2>
                        <h3>Little Lemon Restaurant</h3>
                        <p>Fill out the form below to book a table!</p>
                    </div>
                </section>
            </div>
            <br /><br />

            <section>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => (
                        <Form>
                            <fieldset>
                                <div>
                                    <label htmlFor="date">Choose Date</label>
                                    <Field type="date" id="date" name="date" />
                                    <ErrorMessage name="date" component="div" className="error" />
                                </div>

                                <div>
                                    <label htmlFor="time">Choose Time</label>
                                    <Field as="select" id="time" name="time">
                                        <option value="">Select a Time</option>
                                        {props.availableTimes.availableTimes.map((time) => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="time" component="div" className="error" />
                                </div>

                                <div>
                                    <label htmlFor="guests">Number of Guests</label>
                                    <Field type="number" id="guests" name="guests" min="1" max="20" />
                                    <ErrorMessage name="guests" component="div" className="error" />
                                </div>

                                <div>
                                    <label htmlFor="occasion">Choose Occasion</label>
                                    <Field as="select" id="occasion" name="occasion">
                                        <option value="">Select an Occasion</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Work Event">Work Event</option>
                                    </Field>
                                    <ErrorMessage name="occasion" component="div" className="error" />
                                </div>

                                <div>
                                    <label htmlFor="location">Choose Location</label>
                                    <Field as="select" id="location" name="location">
                                        <option value="">Select a Location</option>
                                        <option value="Outside">Outside</option>
                                        <option value="Inside">Inside</option>
                                        <option value="Random">Random (Based on availability)</option>
                                    </Field>
                                    <ErrorMessage name="location" component="div" className="error" />
                                </div>

                                <div>
                                    <label htmlFor="specialRequests">Special Requests (Optional)</label>
                                    <Field
                                        as="textarea"
                                        id="specialRequests"
                                        name="specialRequests"
                                        rows="4"
                                        placeholder="Let us know if you have any special requests..."
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            fontSize: '1rem',
                                            borderRadius: '6px',
                                            border: '1px solid #ccc',
                                            resize: 'vertical'
                                        }}
                                    />
                                    <ErrorMessage name="specialRequests" component="div" className="error" />
                                </div>


                                <div className="btnReceive">
                                    <center>
                                        <button type="submit">Book Now</button>
                                    </center>
                                </div>
                            </fieldset>
                        </Form>
                    )}
                </Formik>
            </section>
        </header>
    );
}

export default BookingForm;
