import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { FaBlog } from "react-icons/fa6";
import axios from 'axios';

const Logout = () => {
    console.log("Demo");
    localStorage.removeItem('blogid')
    localStorage.removeItem('usertoken')
}

const Header = () => {
    return (
        <div>
            <Container fluid className='pt-2 pb-2 p-0 bg-dark text-white '>
                <Container className='p-0'>
                    <Row className='align-items-center'>
                        <div className='col-3 p-0 ps-3'>
                            <a href="/" className='text-white fs-2 fw-bold'><FaBlog className='mb-3' />LOGGER</a>
                        </div>
                        <div className='col-5 p-0'>
                            <ul className='d-flex mb-0  justify-content-center'>
                                <li className=' ps-4  list-unstyled fw-bold'><Link to="/" className="hov-blog text-white ">Home</Link></li>
                                <li className=' ps-4  list-unstyled fw-bold'><Link to="/" className="hov-blog text-white ">Blog</Link></li>
                            </ul>
                        </div>
                        <div className='col-4 p-0'>
                            <ul className='d-flex mb-0 justify-content-end'>
                                <Link to="/user/login" className="text-white"><li className=' fw-bold  blog-btn'> <FaBlog />  Create Blog..</li></Link>
                                <Link to="" className="text-white"><li onClick={Logout} className=' fw-bold  blog-btn ms-2'> Logout</li></Link>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </Container>



            <Container fluid className='d-none'>
                <Container>
                    <Row>
                        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                            <div className="container-fluid">
                                <div> <a className="navbar-brand" href="/">BLOGGER</a></div>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center d-flex">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/blog">Blog</a>
                                        </li>

                                        {/* <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li> */}

                                    </ul>
                                    <div className='d-flex'>
                                        <Link to="/user/login" className="text-white me-2"><li className=' fw-bold  blog-btn'>Login</li></Link>
                                        <Link to="/blog/create" className="text-white"><li className=' fw-bold  blog-btn'>Create Blog..</li></Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </Row>
                </Container>
            </Container>

        </div>
    )
}

export default Header



// - - - - - - - - - - - -  - -  MUI - - - - - - - - - - - - 


// import * as React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactBootstrapContainer from 'react-bootstrap/Container'; // Renamed import
// import Row from 'react-bootstrap/Row';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// import { FaBlog } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa6";

// // MUI
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Home', 'Blog'];
// const settings = ['Home', 'Dashboard', 'Logout'];

// const Header = () => {

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     return (
//         <div>
//             <AppBar position="static">
//                 <Container maxWidth="xl">
//                     <Toolbar disableGutters>
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             component="a"
//                             href="/"
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'none', md: 'flex' },
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: 'inherit',
//                                 textDecoration: 'none',
//                             }}
//                         >
//                             BLOGGER
//                         </Typography>

//                         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 color="inherit"
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorElNav}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 open={Boolean(anchorElNav)}
//                                 onClose={handleCloseNavMenu}
//                                 sx={{
//                                     display: { xs: 'block', md: 'none' },
//                                 }}
//                             >
//                                 {pages.map((page) => (
//                                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                         <Typography textAlign="center">{page}</Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>
//                         <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//                         <Typography
//                             variant="h5"
//                             noWrap
//                             component="a"
//                             href="/"
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'flex', md: 'none' },
//                                 flexGrow: 1,
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: 'inherit',
//                                 textDecoration: 'none',
//                             }}
//                         >
//                             LOGO
//                         </Typography>
//                         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                             {pages.map((page) => (
//                                 <Button
//                                     key={page}
//                                     onClick={handleCloseNavMenu}
//                                     sx={{ my: 2, color: 'white', display: 'block' }}
//                                 >
//                                     {page}
//                                 </Button>
//                             ))}
//                         </Box>

//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open settings">
//                                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                                 </IconButton>
//                             </Tooltip>
//                             <Menu
//                                 sx={{ mt: '45px' }}
//                                 id="menu-appbar"
//                                 anchorEl={anchorElUser}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={Boolean(anchorElUser)}
//                                 onClose={handleCloseUserMenu}
//                             >
//                                 {settings.map((setting) => (
//                                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                         <Typography textAlign="center">{setting}</Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </div>
//     );
// }

// export default Header;


