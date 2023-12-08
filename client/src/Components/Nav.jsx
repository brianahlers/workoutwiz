import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/favicon-32x32.png'
import Auth from '../Utils/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
// import Nav from 'react-bootstrap/Nav'


const Nav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };
  return (
    <Container className='Nav'>
      <nav className='nav navbar'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to={'/'}>Login</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/home'}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/myworkouts'}>My Workouts</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/newworkout'}>New Workout</Link>
          </li>
          <li className='nav-item'>
            <Button onClick={handleLogout}>Logout</Button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

// const Navdisplay = () => {
//   return (
//     <div className='Nav'>
//     <Navbar className="Navbar" bg="myBlack" data-bs-theme="dark" sticky="top">
//       <Container>
//         <Navbar.Brand className='logo'> <img src={Logo} width="40px" height="40px" /> Workout Wiz </Navbar.Brand>
//         {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//         <Navbar.Collapse id="basic-navbar-nav">

//        <Nav >
           
//             <NavDropdown title="Options" >
//               <NavDropdown.Item href="/">Home</NavDropdown.Item>
//               <NavDropdown.Item href="/myworkout">My Workouts</NavDropdown.Item>
//               <NavDropdown.Item href="/newworkout">New Workout</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="about-us">About Us</Nav.Link>
//             <Nav.Link href="contact-us">Contact Us</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   </div>
//   );
// }








// const Nav = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Nav className="me-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="/myworkout">My Workouts</Nav.Link>
//           <Nav.Link href="/newworkout">New Workout</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   )
// }


export default Nav;