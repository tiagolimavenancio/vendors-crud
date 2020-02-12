import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { 
    Drawer,
    List,
    Divider,    
    IconButton
} from '@material-ui/core';
import {    
    ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons'

import { connect } from 'react-redux';

import { PrimaryListItems, SecondaryListItems } from '../ListItems';
import { styles } from './styles'

function NavDrawer(props) {
    const { classes, open } = props;
    
    return (
        <Drawer
            variant="permanent"
            classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),}}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                { PrimaryListItems }
            </List>
            <Divider />
            <List>
                <SecondaryListItems onClick={props.logout} />
            </List>
      </Drawer>
    )
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    }
}

export default connect(mapStateToProps)(withStyles(styles)(NavDrawer));