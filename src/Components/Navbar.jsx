import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Menu } from 'lucide-react';

const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Services", path: "/services" },
  { id: 4, title: "Portfolio", path: "/portfolio" },
  { id: 5, title: "Contact", path: "/contact" },
];
const links = navItems.map(route => <NavLinks route={route}></NavLinks>)

const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center p-5 shadow-sm mb-8'>
            <span onClick={()=>setOpen(!open)}
             className='flex gap-3 items-center'>
               {
                open? "Close" :
                 <Menu className='md:hidden'></Menu>
               }
               <ul className={`md:hidden absolute duration-700 ${open ? 'top-18 left-14' : '-top-40'}`}>
                {links}
               </ul>
            <h3 className='font-bold text-lg'>My Navbar</h3>
            </span>
            <ul className='md:flex hidden'>
            {
                links
            }
        </ul>
        <button className='btn'>Sigh In</button>
        </nav>
    );
};

export default Navbar;