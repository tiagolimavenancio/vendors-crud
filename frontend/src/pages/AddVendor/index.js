import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
    Typography,    
    Grid,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle    
} from '@material-ui/core';

import { connect } from 'react-redux';
import { vendorActions } from '../../store/ducks/Vendor/actions';
import { styles } from './styles'

function AddVendor(props) {
    const { classes, dispatch, vendors: { vendor } } = props;
    
    function handleChange(prop, event) {        
        dispatch(vendorActions.onChangeProps(prop, event));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const payload = {
            name: vendor.name,
            phone: vendor.phone,
            mobile: vendor.mobile,
            address: vendor.address
        }
        
        if(vendor.id) {
            dispatch(vendorActions.editVendorInfo(vendor.id, payload));
        } else {
            dispatch(vendorActions.createVendor(payload)); 
        }
        
        props.handleClose();
    }

    function InsertText() {
        return <Typography>{'Add New Vendor'}</Typography>
    }

    function EditText() {
        return <Typography>{'Edit Vendor'}</Typography>;
    }

    function SegHeader() {
        if(vendor.id){
            return <EditText />;
        }
        return <InsertText />;
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"><SegHeader /></DialogTitle>
            <DialogContent>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                autoFocus                                                           
                                id="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                                value={vendor.name}
                                onChange={(e) => handleChange('name', e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                name="phone"
                                label="Phone Number"
                                variant="outlined"
                                value={vendor.phone}
                                onChange={(e) => handleChange('phone', e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="mobile"
                                name="mobile"
                                label="Mobile Number"
                                variant="outlined"
                                value={vendor.mobile}
                                onChange={(e) => handleChange('mobile', e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="address"
                                name="address"
                                label="Address"
                                variant="outlined"
                                value={vendor.address}
                                onChange={(e) => handleChange('address', e)}
                            />
                        </Grid>                        
                    </Grid>                                                             
                </form>
            </DialogContent>
            <DialogActions>
                <Button 
                    variant="contained" 
                    className={classes.submit}
                    onClick={props.handleClose}
                >
                    Cancel
                </Button>  
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                >
                    Save
                </Button>                             
            </DialogActions>
        </Dialog>
    )
}

AddVendor.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
    return {
        vendors : state.vendors
    };
}

export default connect(mapStateToProps, null)(withStyles(styles)(AddVendor));
