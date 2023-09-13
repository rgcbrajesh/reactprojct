import React from 'react'
import logo from "../img/logo.webp"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Detail() {
  return (
    <>
      <div className='container-fluid'>
        <div className=' '>
          <div className='img-fluid text-center'>
            <img src={logo} alt="logo" className='h-50 w-50  mb-1' />
          </div>


          <h1 className='text-center' >Brajesh Rajput</h1>
          <h3 className='text-center'>Frontend Designer</h3>
          <h2 className='text-center text-primary'>LBS Collage Harda</h2>
          <div className="row text-center">
            <div className='col-md ms-5'><button className='btn btn-outline-primary ms-2 btn-lg mt-3'>Chat</button></div>
            <div className='col-md me-5'> <button className='btn btn-danger btn-lg mt-3'>Follow</button></div>
          </div>
          <table border={0} className='ms-5 mt-3 w-50'>
            <tr>
              <td><InstagramIcon /></td>
              <td><h5>brajesh_bj_rajput</h5></td>
            </tr>

            <tr>
              <td><FacebookIcon /></td>
              <td><h5>Brajesh Rajput</h5></td>
            </tr>

            <tr>
              <td><TwitterIcon /></td>
              <td><h5>Brajesh Rajput</h5></td>
            </tr>

            <tr>
              <td><GitHubIcon /></td>
              <td><h5>rgcbrajesh</h5></td>
            </tr>
          </table>
          
        </div>
      </div>
    </>
  )
}
