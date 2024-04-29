import axios from 'axios';
import React, { useEffect, useState, Component } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Container, Row } from 'react-bootstrap';

import { FaArrowRightLong } from "react-icons/fa6";
import { LuRedoDot } from "react-icons/lu";

import blog1 from '../BLog Img/blog1.jpg'
import blog2 from '../BLog Img/blog2.jpg'
import blog3 from '../BLog Img/blog3.jpg'


const Home = () => {

  const history = useHistory()
  const [blog, setBlog] = useState([])


  const getBlog = () => {
    axios.get('https://blog-api-2agl.onrender.com/blog/find')
      .then((res) => {
        console.log(res.data.data);
        setBlog(res.data.data)
      })
      .catch((error) => {
        alert(error.response.data);
      })
  }

  useEffect(() => {
    getBlog()
  }, [])

  const card = (id) => {
    console.log(id);
    localStorage.setItem('blogid', id)
    history.push('/blog')
  }

  return (
    <div>

      {/* Main IMG */}
      <Container fluid>
        <Row>
          <div className="p-0 img mt-5">
            <div className="text-center pt-5">
              <h1 className='fs-60 fs-sm-6'>DESIGN <span className='fs-2 fs-sm-6 for'>FOR</span> LIFE</h1>
            </div>
          </div>
        </Row>
      </Container>

      {/* Blog,Map Card */}
      <Container fluid className='bg-lite text-dark pt-5 pb-5 ps-0 pe-0'>
        <Container className="">
          <Row className="  ">
            {
              blog.map((el, index) => {
                return <div className="col-12 ">
                  <div className='img-box point'>
                    <img className='img-bor' onClick={() => card(el._id)} src={'https://blog-api-2agl.onrender.com/images/' + el.image} alt="" />
                  </div>
                  <div className='ps-md-5 ps-3'>
                    <h2 className='mt-2 '>{el.title}</h2>
                    <p className='text-dark fs-5 mt-3'>{el.decription}</p>
                    <hr />
                    <p className='ms-1'><a href="" onClick={() => card(el._id)} className='text-dark fs-6 Read-more mt-3'>Continue Reading..!</a></p>
                  </div>
                </div>
              })
            }
          </Row>
        </Container>
      </Container>

      {/* Blog Card */}
      <Container fluid className='bg-lite text-dark pt-5 pb-5 ps-0 pe-0'>
        <Container className="">
          <Row className='mb-md-4 mb-3 text-center'>
            <h1>Writing <LuRedoDot className='dot-colr fs-3' /></h1>
          </Row>
          <Row className='g-5'>
            <div className="col-12 " onClick={card}>
              <div className='img-box point'>
                <img className='img-bor' src={blog1} alt="" />
              </div>
              <div className='ps-md-5 ps-3 '>
                <h2 className='mt-2 '>title</h2>
                <p className='text-dark fs-5 mt-3'>deicription...!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem inventore similique! Quod corrupti deserunt iusto voluptatem facilis, neque nulla!</p>
                <hr />
                <p className='ms-1'><a href=""  onClick={card} className='text-dark fs-6 Read-more mt-3'>Continue Reading..!</a></p>
              </div>
            </div>
            <div className="col-12 " onClick={card}>
              <div className='img-box point'>
                <img className='img-bor' src={blog2} alt="" />
              </div>
              <div className='ps-md-5 ps-3 '>
                <h2 className='mt-2 '>title</h2>
                <p className='text-dark fs-5 mt-3'>deicription...!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem inventore similique! Quod corrupti deserunt iusto voluptatem facilis, neque nulla!</p>
                <hr />
                <p className='ms-1'><a href=""  onClick={card} className='text-dark fs-6 Read-more mt-3'>Continue Reading..!</a></p>
              </div>
            </div>
            <div className="col-12 " onClick={card}>
              <div className='img-box point'>
                <img className='img-bor' src={blog3} alt="" />
              </div>
              <div className='ps-md-5 ps-3 '>
                <h2 className='mt-2 '>title</h2>
                <p className='text-dark fs-5 mt-3'>deicription...!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem inventore similique! Quod corrupti deserunt iusto voluptatem facilis, neque nulla!</p>
                <hr />
                <p className='ms-1'><a href=""  onClick={card} className='text-dark fs-6 Read-more mt-3'>Continue Reading..!</a></p>
              </div>
            </div>
          </Row>
          <Row>
            <div className='text-center mt-5 '>
              <a href="/all/blog" className="text-white fs-5 p-3 blog-btn rounded-0 fw-bold">View All Blog  <FaArrowRightLong /></a>
            </div>
          </Row>
        </Container>
      </Container>




    </div>


  )
}

export default Home


