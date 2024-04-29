import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { MdOutlineMessage } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { FaGooglePlusG } from "react-icons/fa";

const Contact = () => {
    return (
        <div>

            <div>
                {/* SLIDER-IMG */}
                <Container fluid className='mt-5'>
                    <Row>
                        <div className="img-contact flex"></div>
                    </Row>
                </Container>

                {/* form & contact me */}
                <div className="container">
                    <div className="row con-me d-flex">
                        <div className="col-lg-6 col-12 mb-lg-0 mb-4 in-w-768">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <textarea name="" id="" cols="50" rows="4" placeholder="Message"></textarea>
                            <input type="submit" value="Send Us A Message" className="submit" />
                        </div>
                        <div className="col-lg-6 col-12 in-w-768 con-tx">
                            <h2>Contact Me</h2>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxitssa <br /> periculiser ex, nihil expetendis in mei eis
                                an pericu la
                                es aperiri consequat.</p>
                            <div className="i-box2">
                                <div className="d-flex align-items-center mb-3">
                                    <MdOutlineMessage className='fs-3' />
                                    <p className='mb-0'>info@yoursite.com</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <IoPhonePortrait className='fs-3' />
                                    <p className="mb-0">+(123) 456 -7890</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                   <FaGooglePlusG className='fs-3' />
                                    <p className='mb-0'>GooglePlusG</p>
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