import axios from "axios";
const urlTemp = 'http://localhost:8000/api/movies'

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

function getGenre(){
    return axios({
        method: "get",
        url: "http://localhost:8000/api/genres"
    })
}

export default {
    getUpcomingItens: getUpcomingItens,
    getMovie: getMovie,
    getGenre: getGenre
};