import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from '../assets/favicon-32x32.png'
import Auth from '../Utils/auth';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../assets/workoutwizlogo.png';

// import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
// import Nav from 'react-bootstrap/Nav'


const Nav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };
  return (

    <AppBar position="static">
<Typography variant="h6" component="div" sx={{margin: 'auto', fontSize: '1rem'}}> <img src={logo} alt="Workout Wiz Logo" width="350" height="250" /> </Typography>
    <Toolbar>
      {!Auth.loggedIn() && <Button color="inherit" component={RouterLink} to="/">Login</Button>}
      {Auth.loggedIn() && <Button color="inherit" component={RouterLink} to="/home" sx={{ mr: 3 }}>Home</Button> }
      {Auth.loggedIn() && <Button color="inherit" component={RouterLink} to="/myworkouts" sx={{ mr: 3 }}>My Workouts</Button> }
      {Auth.loggedIn() && <Button color="inherit" component={RouterLink} to="/newworkout" sx={{ mr: 3 }}>Add Workout</Button> }
      {Auth.loggedIn() && <Button color="inherit" component={RouterLink} to="/ask" sx={{ mr: 3 }}>Ask A Certified Personal Trainer</Button> }
      {Auth.loggedIn() && <Box sx={{ flexGrow: 1 }} />}
      {Auth.loggedIn() && <Button color="inherit" onClick={handleLogout}>Logout</Button> }
    </Toolbar>
    
  </AppBar>

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