import React from 'react';
import Nav from './Nav';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <div className='Header'>
            <h1>WORKOUT WIZ</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
};

export default Header;