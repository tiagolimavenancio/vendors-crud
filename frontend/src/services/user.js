import api from './api';

export const userService = {
    get,
    post,
    put,
    deleteDetail
};

function get(apiEndpoint){
    return api.get(apiEndpoint, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function post(apiEndpoint, payload){
    return api.post(apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function put(apiEndpoint, payload){
    return api.put(apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function deleteDetail(apiEndpoint){
    return api.delete(apiEndpoint, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function getOptions(){
    let options = {}; 
    if(localStorage.getItem('token')){
        options.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return options;
}