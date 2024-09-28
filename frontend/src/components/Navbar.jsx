import React from 'react'
import blood2 from '../assets/img/blood1.png';
import {Link} from 'react-router-dom'
export const Navbar = (props) => {
  return (
    <>
     <div className='w-[100vw] bg-black p-3 text-white flex border-2 border-green-500'>
      <div className='w-[50vw]'>
      <p className='text-2xl text-white font-mono'>{props.name}</p>
      </div>
      <div className='w-[50vw]'>
        <ul className="flex justify-end items-end space-x-5">
            <li className=''>About us</li>
            <li>Contact</li>
            <Link to='/login'><li>Login</li></Link>
        </ul>
      </div>
     </div>
    </>
  )
}

export default Navbar