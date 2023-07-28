import { React, useState } from 'react'
import './Home.scss'

// Icons
import { BsClockHistory, BsSearch, BsPeople } from 'react-icons/bs'
import { BiLibrary } from 'react-icons/bi'
import { FiDownload, FiShoppingCart } from 'react-icons/fi'
import { LuSettings } from 'react-icons/lu'

const menuItems = [
  {name: 'Store', icon: FiShoppingCart},
  {name: 'Recent', icon: BsClockHistory},
  {name: 'Library', icon: BiLibrary},
  {name: 'Downloads', icon: FiDownload},
  {name: 'Friends', icon: BsPeople},
  {name: 'Settings', icon:LuSettings},
]

export default function Home(){
  const [active, setActive] = useState(null)

  return (
    <>
    <div className='flex flex-row'>
      <section id='menu-bar' className=''>
        <div className='py-5 '>
          <img src='./clearance_logo.svg' alt="Clearance Logo" className='clearance-logo'/>
        </div>
        <div className='controls'>
          {menuItems.map((item) => {
            return (
              <a 
                href='#'
                onClick={() => setActive(item)}
                className={`action ${active == item && 'active'}`}
              >
                <item.icon className='icon'/>
              </a>
            )
          })}
        </div>
        <div className='py-5'>
          <img src='./avatar_pfp.png' alt="User Avatar" className='avatar rounded-full' />
        </div>
      </section>
      <section className='w-full'>

      </section>
    </div>
    </>
  );
}