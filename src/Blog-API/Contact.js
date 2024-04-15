import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Container, Row } from 'react-bootstrap'


const Contact = () => {
    return (
        <div>

            {/* my Contact  */}
            {/* <div className='d-flex justify-content-center  mt-5 mb-5'>
                <div className="box-1 ">
                    <h1 className='mb-4 text-center'>Contact Us</h1>
                    <form action="/contact-us" method='post'>
                        <label for="name">first name</label><br />
                        <input className='in-gov' type="text" name="name" placeholder="Your Name" /><br /><br />

                        <label for="email">E-mail</label><br />
                        <input className='in-gov' type="email" name="email" placeholder="Your E-mail" /><br /><br />

                        <button type="submit" className='button submit'>Signup</button>

                        <div className='d-flex justify-content-center'>
                            <button type="submit" className='button submit'>Signup</button>
                        </div>
                    </form>
                </div>
            </div> */}


            <div>
                {/* SLIDER-IMG */}
                <div className="container-fluid p-0">
                    <div className="img-contact flex">
                        <div className="on-tx">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>

                {/* form & contact me */}
                <div className="container">
                    <div className="row con-me d-flex">
                        <div className="col-6 in-w-768">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <textarea name="" id="" cols="50" rows="4" placeholder="Message"></textarea>
                            <input type="submit" value="Send Us A Message" className="submit" />
                        </div>
                        <div className="col-6 in-w-768 con-tx">
                            <h2>Contact Me</h2>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxitssa <br /> periculiser ex, nihil expetendis in mei eis
                                an pericu la
                                es aperiri consequat.</p>
                            <div className="i-box2">
                                <div className="d-flex align-items-center">
                                    <i className="fa-regular fa-message flex"></i>
                                    <p>info@yoursite.com</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-mobile-screen flex"></i>
                                    <p className="d-flex align-items-center">+(123) 456 -7890</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="fa-regular fa-file flex"></i>
                                    <p>Download Resume</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact