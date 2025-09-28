import React from 'react';

const NavLinks = ({route}) => {
    return (
        <li className='mr-10 mb-1 hover:bg-amber-200 px-4 rounded-sm'>
            <a href={route.path}>{route.title}</a>
        </li>
    );
};

export default NavLinks;