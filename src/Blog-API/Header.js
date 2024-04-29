import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaBlog } from "react-icons/fa6";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




const Header = () => {

    const history = useHistory()

    const Logout = () => {
        // console.log("Demo");
        localStorage.removeItem('blogid')
        localStorage.removeItem('usertoken')
        history.push('/')
    }

    return (
        <div>

            {/* hdr */}
            <Navbar expand="lg" className='border-bottom  bg-dark ' fixed="top" >
                <Container fluid className='ps-4 pe-4 '>
                    <Navbar.Brand href="/" className='text-white fs-2 fw-bold'><FaBlog className='mb-3' />LOGGER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="hov-blog text-white ">HOME</Nav.Link>
                            <Nav.Link href="/blog" className="hov-blog text-white ">BLOG</Nav.Link>
                            <Nav.Link href="/about/us" className="hov-blog text-white ">ABOUT</Nav.Link>
                            <Nav.Link href="/contact" className="hov-blog text-white ">CONTACT</Nav.Link>
                        </Nav>

                        <Nav className="gap-2">
                            <Button href="/user/login" className=' fw-bold '>Create BLog</Button>{' '}
                            <Button onClick={Logout} className=' fw-bold  '>Logout</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header