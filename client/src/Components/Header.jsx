import React from 'react';
import Nav from './Nav';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header>
            <Nav />
            <h1>header</h1>
        </header>
    );
};

export default Header;