import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from '@material-ui/core/';
import {
    Menu as MenuIcon
} from '@material-ui/icons/'

import { styles } from './styles'

function NavBar(props) {
    const { classes, open } = props;
    
    return (
        <AppBar 
            position="absolute" 
            className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                </Typography>                         
            </Toolbar>
        </AppBar>
    )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);