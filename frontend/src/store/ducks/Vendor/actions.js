import { userService } from '../../../services/user';

function getVendor() {
    return dispatch => {
        userService.get('/').then((response) => {                     
            dispatch(changeVendorsList(response.data.vendors));
        }).catch((err) => {
            console.log(err);            
        });
    }
}

function createVendor(payload) {
    return dispatch => {
        userService.post('/vendors', payload).then((response) => {
            dispatch(createUserInfo());     
            dispatch(vendorActions.getVendor());       
        }).catch((err) => {
            console.log(err);            
        })
    }
}

function getVendorById(id){
    return dispatch => {        
        userService.get(`/vendors/${id}`).then((response)=> {            
            dispatch(editVendorsDetails(response.data.vendor));
        }).catch((err) => {
            console.log(err);            
        })
    };
}


function editVendorInfo(id, payload) {
    return dispatch => {
        userService.put(`/vendors/${id}`, payload).then((response)=>{
            dispatch(updatedUserInfo());  
            dispatch(vendorActions.getVendor());          
        }).catch((err) => {            
            console.log(err);            
        })
    }
}

function deleteVendorById(id) {
    return dispatch => {
        userService.deleteDetail(`/vendors/${id}`).then((response)=>{
            dispatch(deleteVendorsDetails());
            dispatch(vendorActions.getVendor());
        }).catch((err) => {                    
            console.log(err);            
        })
    };
}

function onChangeProps(props, event) {
    return dispatch => {
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function clearVendor() {
    return dispatch => {
        dispatch(clearVendorProps());
    }
}

export function clearVendorProps(){
    return {
        type: 'CLEAR_VENDOR_PROPS'
    }
}

export function changeVendorsList(payload) {
    return {
        type: 'FETECHED_ALL_VENDOR',
        payload
    }
}

export function handleOnChangeProps(props, value){
    return {
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editVendorsDetails(payload){
    return {
        type: "VENDOR_DETAIL",
        payload
    }
}

export function updatedUserInfo(){
    return {
        type: "VENDOR_UPDATED"
    }
}

export function createUserInfo(){
    return {
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteVendorsDetails(){
    return {
        type: "DELETED_VENDOR_DETAILS"
    }
}

export const vendorActions = {
    getVendor,
    getVendorById,
    onChangeProps,
    editVendorInfo,
    createVendor,
    deleteVendorById,
    clearVendor
}