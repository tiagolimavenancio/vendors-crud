import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
    Container,    
    Grid,
    Box,
    Button,
    TextField,
    Typography,    
    Avatar,
    CssBaseline,
    Link
} from '@material-ui/core/'
import {
    LockOutlined as LockOutlinedIcon
} from '@material-ui/icons/'

import { connect } from 'react-redux';
import { userActions } from '../../store/ducks/User/actions';

import { history } from '../../helpers/history';
import Copyright from '../../components/Copyright';
import styles from './styles';

function Login(props) {
    const { classes, dispatch } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');    
    const [submitted, setSubmitted] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setTimeout(() => {
                history.push('/home');
            }, 500)
        }
    }, []);

    async function handleLogin(event) {
        event.preventDefault();
        setSubmitted(true);
        if(username && password) {
            await dispatch(userActions.login(username, password));
            setTimeout(() => {
                history.push('/home');
            }, 500)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        id="username"
                        name="username"                    
                        label="Username"
                        value={username}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"                        
                        className={classes.submit}
                        onClick={handleLogin}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                "Don't have an account? Sign Up"
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    }
}

export default withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Login)));