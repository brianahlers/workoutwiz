import React from 'react';
import Nav from './Nav';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header>
            <h1>WORKOUT WIZ</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
};

export default Header;