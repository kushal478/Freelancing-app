import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';



const Demo = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{

                mobNumber: ''
            }}
            validationSchema={
                Yup.object({
                    mobNumber: Yup.string().min(3, "min 3").max(14, 'max 10').matches('((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}', 'Phone number is not valid'),
                })
            }
            // validate={values => {
            //     const errors = {};
            //     if (!values.email) {
            //         errors.email = 'Required';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //     ) {
            //         errors.email = 'Invalid email address';
            //     }
            //     return errors;
            // }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>


                    <input
                        type="text"
                        name="mobNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobNumber}
                    />
                    {errors.mobNumber && touched.mobNumber && errors.mobNumber}

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default Demo;
