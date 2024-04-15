import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
        alert(error.response.data.message);
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
  const Update = (id) => {
    history.push('/blog/create')
  }

  useEffect(() => {
    getBlogone()
  }, [])


  return (
    <div>

      {/* Main IMG */}
      <div className=" mb-5 p-0">
        <div className="container-fluid mb-5 position-relative d-block">
          <div className="row align-items-center">
            <div className="p-0 img">
              <img width="100%" height="100%" src="https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1349,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="container-fluid pos-ab">
          <div className="row align-items-center">
            <div className="p-0">
              <h1 className='fs-60 fs-sm-6'>DESIGN <span className='fs-2 fs-sm-6 for'>FOR</span> LIFE</h1>
            </div>
          </div>
        </div>
      </div>


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

              <div className="d-flex mt-5  justify-content-between">
                <div className=''>
                  <a href="/" className="text-dark fs-5 p-3 blog-btn rounded-0 fw-bold"> <FaArrowLeftLong /> Back To Home</a>
                </div>
                <div className='d-flex' >
                  <Link  onClick={() => Delet(data._id)} className="text-white me-2 fs-6 p-2 bg-dark rounded-0 fw-bold"> Delete</Link>
                  <Link  onClick={() => Update(data._id)} className="text-white me-2 fs-6 p-2 bg-dark rounded-0 fw-bold"> Update</Link>
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
