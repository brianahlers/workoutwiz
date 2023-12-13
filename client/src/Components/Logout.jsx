import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    // Clear user data from state or local storage
    localStorage.removeItem('id_token');
    localStorage.removeItem('loggedInUser');
    // Redirect to login page
    // history.push('/login');
  }, [history]);

  return null;
};

export default Logout;