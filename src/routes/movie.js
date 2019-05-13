import axios from "axios";
const urlTemp = 'https://polar-waters-94846.herokuapp.com/api/movies'

function getUpcomingItens(page) {
    
    return axios({
        method: "get",
        url: urlTemp+'/'+page
    });
}

function getMovie(filters) {
    return axios({
        method: "get",
        url: urlTemp+'/'+filters
    });
}

export default {
    getUpcomingItens: getUpcomingItens,
    getMovie: getMovie
};