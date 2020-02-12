import { combineReducers } from 'redux';
import { authentication } from './User/';
import { vendors } from './Vendor';

export default combineReducers({
    authentication,
    vendors
});