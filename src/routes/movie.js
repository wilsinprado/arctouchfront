import axios from "axios";
const urlTemp = 'http://localhost:8000/api/movies'

function getUpcomingItens() {
    
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