import axios from 'axios';
import React, { useEffect, useState, Component } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Container, Row } from 'react-bootstrap';

import { FaArrowRightLong } from "react-icons/fa6";
import { LuRedoDot } from "react-icons/lu";

import blog1 from '../BLog Img/blog1.jpg'
import blog2 from '../BLog Img/blog2.jpg'
import blog3 from '../BLog Img/blog3.jpg'

import Slider from "react-slick";
import s1 from '../BLog Img/slider1.png'
import s2 from '../BLog Img/slider2.png'
import s3 from '../BLog Img/slider3.png'



const Home = () => {

  const history = useHistory()
  const [blog, setBlog] = useState([])


  const getBlog = () => {
    axios.get('https://blog-api-dzjv.onrender.com/blog/find')
      .then((res) => {
        console.log("iiii", res.data.data);
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

  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToScroll: 1
  };


  return (
    <div>

      {/* Main IMG */}
      {/* <Container fluid>
        <Row>
          <div className="p-0 img ">
            <div className="text-center mt ms-5 bg-design">
              <h1 className='fs-60 '>DESIGN <span className='fs-2 fs-sm-6 for'><br />FOR</span> LIFE</h1>
            </div>
          </div>
        </Row>
      </Container> */}

      <Container fluid className='mt-15 '>
        <Row className='mb-0'>
          <div className="slider-container p-0">
            <Slider {...settings}>
              <div className=''>
                <img width="100%" src={s1} alt="" />
              </div>
              <div className=''>
                <img width="100%" src={s2} alt="" />
              </div>
              <div className=''>
                <img width="100%" src={s3} alt="" />
              </div>
            </Slider>
          </div>
        </Row>
      </Container>

      {/* Blog,Map Card */}
      <Container fluid className='bg-lite text-dark pt-5 ps-0 pe-0'>
        <Container className="">
          <Row className="  ">
            <div className='mb-md-4 text-center'>
              <h1 className='mb-0'>Writing <LuRedoDot className='dot-colr fs-3' /></h1>
            </div>

            {
              blog.map((el, index) => {
                return <div className="col-12 " key={index}>
                  <div className='img-box point'>
                    <img className='img-bor' onClick={() => card(el._id)} src={'https://blog-api-dzjv.onrender.com/images/' + el.image} alt="" />
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
      <Container fluid className='bg-lite text-dark mt-5 pb-5 ps-0 pe-0'>
        <Container className="">
          <Row className='g-5'>
            <div className="col-12  p-0" onClick={card}>
              <div className='img-box point'>
                <img className='img-bor' src={blog1} alt="" />
              </div>
              <div className='p-4'>
                <h2 className='mt-2 '>Cheerful Loving Couple Bakers Drinking Coffee</h2>
                <p className='text-dark fs-5 mt-3'>deicription...!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem inventore similique! Quod corrupti deserunt iusto voluptatem facilis, neque nulla!</p>
                <hr className='hr-width' />
                <p className='ms-1'><a href="" onClick={card} className='text-dark fs-6 Read-more mt-3'>Continue Reading..!</a></p>
              </div>
            </div>
            <div className="col-12  p-0" onClick={card}>
              <div className='img-box point'>
                <img className='img-bor' src={blog2} alt="" />
              </div>
              <div className='ps-4 '>
                <h2 className='mt-2 '>Loft Office With Vintage Decor For Creative Working</h2>
                <p className='text-dark fs-5 mt-3'>deicription...!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem inventore similique! Quod corrupti deserunt iusto voluptatem facilis, neque nulla!</p>
                <hr />
                <p className='ms-1'><a href="" onClick={card} className='text-dark fs-6 Read-more mt-3'>Continue Reading..!</a></p>
              </div>
            </div>
            <div className="col-12  p-0" onClick={card}>
              <div className='img-box point'>
                <img className='img-bor' src={blog3} alt="" />
              </div>
              <div className='ps-4 '>
                <h2 className='mt-2 '>Cosy Bright Office In Yellow And Grey Colors</h2>
                <p className='text-dark fs-5 mt-3'>deicription...!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem inventore similique! Quod corrupti deserunt iusto voluptatem facilis, neque nulla!</p>
                <hr  />
                <p className='ms-1'><a href="" onClick={card} className='text-dark fs-6 Read-more mt-3'>Continue Reading..!</a></p>
              </div>
            </div>
          </Row>
          {/* <Row>
            <div className='text-center mt-5 '>
              <a href="/blog" className="text-white fs-5 p-3 blog-btn rounded-0 fw-bold">View All Blog  <FaArrowRightLong /></a>
            </div>
          </Row> */}
        </Container>
      </Container>




    </div>


  )
}

export default Home


