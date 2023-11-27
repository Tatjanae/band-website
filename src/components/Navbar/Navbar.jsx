import { useState } from 'react';
import PLACEHOLDER from '../../Images/logo-no-background.png'
import { links } from '../../data'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="container nav_container">
        <a href="https://jellyfishband.com" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={PLACEHOLDER} alt="Nav Logo" />
                </a> 
                
                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
    {links.map(({ name, path }, index) => (
        <li key={index}>
            <a href={path} className={window.location.pathname === path ? 'active-nav' : ''}>
                {name}
            </a>
        </li>
    ))}
</ul>

<button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
               {
                isNavShowing ? <MdOutlineClose /> :  <FaBars />
               }
            </button>

            </div>
            </nav>
  )
}

export default Navbar