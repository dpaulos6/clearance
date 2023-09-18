import { React } from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import './Home.scss'

// Icons
import { BiSearch } from 'react-icons/bi';

// Pages/Tabs


// Components
import SideMenu from '../components/SideMenu.js';

export default function Home(){

  function randomNumber(int) {
    return Math.floor(Math.random() * int)
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
            <p>{randomNumber(10)}</p>
          </span>
          <div class="search">
            <input placeholder="Search your library"/>
            <BiSearch className='icon'/>
          </div>
        </div>
        <div className='middle'>
          <h1 className='game-title'>Apex Legends</h1>
          <div className='game-stats'>
            <div className='playtime'>
              <p className='playtime-label'>Play Time</p>
              <p className='playtime-info'>{randomNumber(10000)} hours</p>
            </div>
            <div className='achievements'>
              <p className='achievements-label'>Achievements</p>
              <p className='achievements-info'>{randomNumber(100)}%</p>
            </div>
          </div>
        </div>
        <div className='bottom'>
          
        </div>
      </section>
    </div>
    </>
  );
}