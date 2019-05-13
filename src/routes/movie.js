import axios from "axios";
const urlTemp = 'https://polar-waters-94846.herokuapp.com/api/movies'

function getUpcomingItens(filters) {
    
    return axios({
        method: "get",
        url: urlTemp
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