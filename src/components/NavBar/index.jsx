import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Link } from 'react-router-dom';
import './style.css';

const pages = ['About Us', '3D Projects', 'Upload', 'KUMKS'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">

        <Toolbar disableGutters>
          
          <ViewInArIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NEURAL RENDERING
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to='/about-us' style={{textDecoration: 'none'}}>
                <MenuItem key={pages[0]} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">About Us</Typography>
                </MenuItem>
              </Link>
              <Link to='/three-d-projects' style={{textDecoration: 'none'}} >
                <MenuItem key={pages[1]} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">3D Projects</Typography>
                </MenuItem>
              </Link>
              <Link to='/upload' style={{textDecoration: 'none'}}>
                <MenuItem key={pages[2]} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">Upload</Typography>
                </MenuItem>
              </Link>
              <Link to='/kumks' style={{textDecoration: 'none'}}>
                <MenuItem key={pages[3]} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">KUMKS</Typography>
                </MenuItem>
              </Link>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          <ViewInArIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NEURAL RENDERING
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to='/about-us' style={{textDecoration: 'none'}}>
            <Button
              key={pages[0]}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', padding: '6px 15px', textDecoration: 'none' }}
            >
              About Us
            </Button>
          </Link>
          <Link to='/three-d-projects' style={{textDecoration: 'none'}} >
            <Button
              key={pages[1]}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', padding: '6px 15px' }}
            >
              3D Projects
            </Button>
          </Link>
          <Link to='/upload' style={{textDecoration: 'none'}}>
            <Button
              key={pages[2]}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', padding: '6px 15px' }}
            >
              Upload
            </Button>
          </Link>
          <Link to='/kumks' style={{textDecoration: 'none'}}>
            <Button
              key={pages[3]}
              onClick={"/kumks"}
              sx={{ my: 2, color: 'white', display: 'block', padding: '6px 15px' }}
            >
              KUMKS
            </Button>
          </Link>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', padding: '6px 15px' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
