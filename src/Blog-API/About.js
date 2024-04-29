import React from 'react'
import { Container, Row } from 'react-bootstrap'

import about from '../BLog Img/about.jpg'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const About = () => {
    return (
        <div>
            <Container fluid className='mtb-30'>
                <Container>
                    <Row>
                        <h3>Hello Dear , I'm John Doe</h3>
                        <div>
                            <img width="100%" className='' src={about} alt="" />
                        </div>
                        <div className='mt-3'>
                            <p className='about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illo, veniam doloremque blanditiis ullam maiores quo dolor, minima nulla numquam sunt odio, perspiciatis mollitia consequatur. Provident obcaecati assumenda vero quam, praesentium eos deserunt reiciendis impedit facilis quod a sit itaque, rem quo repellat quis illum voluptas, asperiores unde error? Obcaecati tempora ullam, at numquam neque quis aut tenetur accusantium ducimus quo harum iure reiciendis est explicabo voluptas fugit illo animi iste, perferendis qui! Odio porro, explicabo minima quaerat incidunt voluptatibus earum officiis facilis dignissimos dolore, ratione voluptate ut aspernatur cumque autem quibusdam ducimus placeat similique fuga minus natus nam. Repudiandae!</p>
                        </div>
                    </Row>
                    <hr />
                    <Row>
                        <div className='mt-3'>
                            <h3 className='text-center'>Follow Me On</h3>
                            <ul className='d-flex ps-0 gap-5 justify-content-center'>
                                <li><a href="/" className='fs-2 text-dark hov-blog  '><FaInstagram /></a></li>
                                <li><a href="/" className='fs-2 text-dark hov-blog  '><FaFacebook /></a></li>
                                <li><a href="/" className='fs-2 text-dark hov-blog  '><FaTwitter /></a></li>
                                <li><a href="/" className='fs-2 text-dark hov-blog  '><FaGooglePlusG /></a></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default About