import React from 'react';


const Nav = ({ currentPage, handlePageChange }) => {
    return (
        <div className='Nav'>
            <nav className='nav navbar'>
                <li className='nav-item'>
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                        Home
                    </a>
                </li>
                {/* <li className='nav-item'>
                    <a
                        href="#calendar"
                        onClick={() => handlePageChange('Calendar')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        About
                    </a>
                </li> */}
            </nav>
        </div>
    );
};