import axios from "axios";
const urlTemp = 'https://polar-waters-94846.herokuapp.com/api/'

function getUpcomingItens(page) {
    
    return axios({
        method: "get",
        url: urlTemp+'movies/'+page
    });
}

function getMovie(filters) {
    return axios({
        method: "get",
        url: urlTemp+'movie/'+filters
    });
}

export default {
    getUpcomingItens: getUpcomingItens,
    getMovie: getMovie
};