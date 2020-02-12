import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton,
    Typography,
    Link,
    Fab
} from '@material-ui/core/';
import {
    Delete as DeleteIcon,
    Edit as EditIcon,  
    Add as AddIcon  
} from '@material-ui/icons';

import { connect } from 'react-redux';
import { vendorActions } from '../../store/ducks/Vendor/actions';

import AddVendor from '../AddVendor';
import { styles } from './styles';

function Vendor(props) {
    const { classes, dispatch, vendors } = props;    
    const [open, setOpen] = useState(false);
    
    useEffect(() => {      
      fetchData();
    }, [])

    async function fetchData() {
      await dispatch(vendorActions.getVendor());
    }

    async function handleCreate(event) {
      event.preventDefault();
      await dispatch(vendorActions.clearVendor());
      handleClickOpen();
    }

    async function handleEdit(event, id) {
      event.preventDefault();
      await dispatch(vendorActions.getVendorById(id));      
      handleClickOpen();
    }

    async function handleDelete(event, id) {
      event.preventDefault();
      await dispatch(vendorActions.deleteVendorById(id))
    }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {      
      setOpen(false);
    };

    function preventDefault(event) {
      event.preventDefault();
      fetchData();
    }

    return (
       <>
          <Grid container direction='row' justify='space-between' alignItems='center' spacing={24}>
            <Grid item xs={3}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Vendors
              </Typography>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={3} container justify="flex-end">
              <Fab color="primary" className={classes.button} aria-label="add" onClick={handleCreate}>
                <AddIcon />
              </Fab>      
            </Grid>            
          </Grid>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell numeric>Mobile</TableCell>
                <TableCell numeric>Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                vendors.data.length > 0 && vendors.data.map(n => (
                  <TableRow key={n._id}>
                      <TableCell component="th" scope="row">
                        {n.name}
                      </TableCell>
                      <TableCell numeric>{n.mobile}</TableCell>
                      <TableCell numeric>{n.phone}</TableCell>
                      <TableCell>{n.address}</TableCell>
                      <TableCell>
                        <IconButton 
                            className={classes.button} 
                            aria-label="Edit" 
                            component='a'
                            onClick={(event) => handleEdit(event, n._id)}
                          >
                            <EditIcon />
                        </IconButton>
                        <IconButton 
                            className={classes.button} 
                            aria-label="Delete" 
                            onClick={(event) => handleDelete(event, n._id)}
                          >
                            <DeleteIcon />
                        </IconButton>
                      </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>

          <div className={classes.seeMore}>
            <Link color="primary" onClick={preventDefault}>
              See more orders
            </Link>
          </div>        

          <AddVendor open={open} handleClose={handleClose} />
       </>
    );
}

Vendor.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
  return {
      vendors: state.vendors
  };
}

export default withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(Vendor)));