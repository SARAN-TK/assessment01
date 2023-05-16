import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <AppBar position="static" color='error'>
      <Toolbar >
        <Typography align='left' variant="h5" component="div" sx={{ flexGrow: 1 }}>BLOG APP</Typography>
        <Button component={Link} to="/home" variant='Contained' color="success" >Home</Button>
        <Button component={Link} to="/form" variant='Contained' color="success">FORM</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;