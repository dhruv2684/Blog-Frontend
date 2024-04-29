import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';

import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Blog = () => {

  const history = useHistory()
  const [data, setData] = useState([])


  let id = localStorage.getItem('blogid')

  const getBlogone = () => {
    axios.get('https://blog-api-2agl.onrender.com/blog/findone/' + id)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data)
      })
      .catch((error) => {
        alert(error.response.data);
      })
  }

  // delete
  const Delet = (id) => {
    axios.delete('https://blog-api-2agl.onrender.com/blog/delete/' + id)
      .then((res) => {
        console.log(res.data.data);
        history.push('/')
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
  }

  // Update
  // const Update = (id) => {
  //   history.push('/blog/create')
  // }

  useEffect(() => {
    getBlogone()
  }, [])


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



      <div className="container-fluid p-0">
        <div className="container">
          <div className="row">
            <div className="col-12 p-5">
              <div className='mb-3 text-center'>
                <img width="70%" src={'https://blog-api-2agl.onrender.com/images/' + data.image} alt="" />
              </div>
              <h2 className='text-center fs-1'>{data.title}</h2>
              <p className='mt-4 fs-4'>{data.description}</p>
              <p className='fs-4'>{data.description} </p>

              <div className="d-md-flex mt-md-5 mt-4  ">
                <div className="col-md-6 col-12  d-flex justify-content-md-start justify-content-center">
                    <a href="/" className="text-dark fs-5 p-3 blog-btn rounded-0 fw-bold"> <FaArrowLeftLong /> Back To Home</a>
                  </div>
                <div className="col-md-6 col-12 mt-md-0 mt-4 d-flex justify-content-md-end justify-content-center">
                  <a onClick={() => Delet(data._id)} className="text-white me-2 fs-6 p-2 bg-dark rounded-0 fw-bold"> Delete</a>
                  {/* <a onClick={() => Update(data._id)} className="text-white me-2 fs-6 p-2 bg-dark rounded-0 fw-bold"> Update</a> */}
                  <a className="text-white me-2 fs-6 p-2 bg-dark rounded-0 fw-bold"> Update</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog
