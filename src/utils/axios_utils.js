// eslint-disable-next-line no-unused-vars
import axios from 'axios';

export function get(route,callback){
    // eslint-disable-next-line no-unused-vars
    const path = build_path(route);
    axios.get(path).then((response) => {
        callback(response) ;
    })
}

export function post(route,callback){
    // eslint-disable-next-line no-unused-vars
    const path = build_path(route);
    axios.post(path).then((response) => {
        callback(response) ;
    })
}

function build_path(route){
    const home_url = 'http://localhost:5000';
    return home_url + '/' + route ;
}