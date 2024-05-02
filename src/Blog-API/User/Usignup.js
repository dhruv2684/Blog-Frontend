import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";

const Usignup = () => {

    const history = useHistory()

    const Signupschema = Yup.object().shape({
        uname: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });


    return (
        <div className='d-flex justify-content-center align-items-center mtb-30 '>
            <div className="box-1">
                <h1 className='mb-4'>User Signup</h1>
                <Formik
                    initialValues={{
                        uname: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={Signupschema}
                    onSubmit={async (values) => {
                        axios.post('https://blog-api-dzjv.onrender.com/user/signup', values)
                            .then((res) => {
                                console.log(res.data.data);
                                history.push('/user/login')
                            })
                            .catch((error) => {
                                alert(error.response.data.message);
                            })
                    }}
                >
                    <Form className='d-flex flex-column'>
                        <label htmlFor="uname" className='fw-bold' >uname : </label>
                        <Field id="uname" className='in-gov' name="uname" placeholder="uname" />
                        <span><ErrorMessage name='uname' /><br /><br /></span>

                        <label htmlFor="email" className='fw-bold'>Email :</label>
                        <Field
                            className='in-gov'
                            id="email"
                            name="email"
                            placeholder="Email123@email.com"
                            type="email"
                        />
                        <span><ErrorMessage name='email' /><br /><br /></span>

                        <label htmlFor="password" className='fw-bold'>password :</label>
                        <Field id="password" className='in-gov' name="password" placeholder="password" />
                        <span><ErrorMessage name='password' /><br /><br /></span>

                        <div className='d-flex justify-content-center'>
                            {/* <a type="submit" className=' submit'>Signup</a> */}
                            <button type="submit" className=' submit'>Submit</button>
                        </div>
                        <Link to="/user/login" className="text-dark mt-3 text-center"><li className=' me-2 fw-bold  '><span className='dot-colr'>Already Have An Account.?</span></li></Link>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Usignup