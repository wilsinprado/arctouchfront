import axios from "axios";

import constantes from '../constantes';

function getUpcomingItens(filters) {
    let urlTemp = 'http://localhost:8000/api/movies'
    return axios({
        method: "get",
        url: urlTemp,
        // params: filters
    });
}

function getMovie(id) {
    // return axios({
    //     method: "get",
    //     url: `${constantes.SPOTIFY_URL_FEATURED_PLAYLISTS}`,
    //     params: filters,
    //     headers: {
    //          'Authorization': `Bearer ${token}`
    //     }
    // });
}

export default {
    getUpcomingItens: getUpcomingItens,
    getMovie: getMovie
};