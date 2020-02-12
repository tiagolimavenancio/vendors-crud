import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {
    CssBaseline,
    Container,
    Box,
    Grid,
    Paper
} from '@material-ui/core/'

import { connect } from 'react-redux';
import { userActions } from '../../store/ducks/User/actions';

import Vendor from '../Vendor';
import NavBar from '../../components/NavBar';
import NavDrawer from '../../components/NavDrawer';
import Copyright from '../../components/Copyright';

import { history } from '../../helpers/history';
import { styles } from './styles';

function Home(props) {
    const { classes, dispatch } = props;
    const [open, setOpen] = useState(true);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    async function logout() {        
        await dispatch(userActions.logout());
        history.push('/');
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
            <NavDrawer handleDrawerClose={handleDrawerClose} open={open} logout={logout} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                            
                            </Paper>
                        </Grid>
                        {/* Vendors */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Vendor />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return state
}

export default withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Home)));

