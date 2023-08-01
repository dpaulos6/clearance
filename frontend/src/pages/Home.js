import { React } from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import './Home.scss'

// Icons
import { BiSearch } from 'react-icons/bi';

// Pages/Tabs


// Components
import SideMenu from '../components/SideMenu.js';

export default function Home(){

  function randomNumber() {
    return Math.floor(Math.random() * 10)
  }

  return (
    <>
    <div className='flex flex-row'>
      <section id='menu-bar' className=''>
        <SideMenu/>
      </section>
      <section id="main-content" className='w-full'>
        <div className='top'>
          <span className='title'>
            <h2>Your Library</h2>
            <p>{randomNumber()}</p>
          </span>
          <div class="search">
            <input placeholder="Search your library"/>
            <BiSearch className='icon'/>
          </div>
        </div>
        <div className='middle'>
          
        </div>
        <div className='bottom'>
          
        </div>
      </section>
    </div>
    </>
  );
}