import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Nav'>
      <nav className='nav navbar'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/myworkout'}>My Workouts</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/newworkout'}>New Workout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;