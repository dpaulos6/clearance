import React from 'react'
import './Home.scss'

// Icons
import { BsClockHistory, BsSearch, BsPeople } from 'react-icons/bs'
import { BiLibrary } from 'react-icons/bi'
import { FiDownload, FiShoppingCart } from 'react-icons/fi'
import { LuSettings } from 'react-icons/lu'

export default function Home(){
  return (
    <>
      <section id='menu-bar' className=''>
        <div className='py-5'>
          <img src='./eclipta_svg.png' alt="Eclipta Logo"/>
        </div>
        <div className='controls'>
          <a href='#' className='action'>
            <FiShoppingCart className='icon'/>
          </a>
          <a href='#' className='action'>
            <BsClockHistory className='icon'/>
          </a>
          <a href='#' className='action'>
            <BiLibrary className='icon'/>
          </a>
          <a href='#' className='action'>
            <FiDownload className='icon'/>
          </a>
          <a href='#' className='action'>
            <BsPeople className='icon'/>
          </a>
          <a href='#' className='action'>
            <LuSettings className='icon'/>
          </a>
        </div>
        <div className='py-5'>
          <img src='./avatar_pfp.png' alt="User Avatar" className='rounded-full' />
        </div>
      </section>
    </>
  );
}