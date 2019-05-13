// Importando o React
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import * as MovieRoutes from '../../routes/movie';

class Movie extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      id: this.props.match.params.id,
      original_title: '',
      poster_path: '',
      overview: '',
      genres: [],
      release_date: ''
   };
    this.getItems = this.getItems.bind(this);
    this.backToList = this.backToList.bind(this);
  }

  getItems() {
    
    const id = this.props.match.params.id;

    MovieRoutes.default.getMovie(id).then(response => {

        this.setState(response.data);
        console.log(this.state);
    }).catch(() => { console.log('Erro ao recuperar os dados'); });

    
  }
  
  componentDidMount() {
      this.getItems()
  }

  backToList(){
    this.props.history.push('/');
  }


  render() {
    const styleDiv = {
        "padding": "10px 10px 10px 10px",
        "textlAign": "left"
    };
    const urlImg = 'http://image.tmdb.org/t/p/w185/';
    return (
        <div style={styleDiv}>
        <Grid item xs={6}>
            <Paper>
            <Grid item xs={12} container spacing={24}>
                <Grid item xs={6}>
                    <label className="labelMovie">Name</label>: {this.state.original_title}
                </Grid>
                <Grid item xs={6}>
                    <label className="labelMovie">Release date</label>: {this.state.release_date}
                </Grid>
                <Grid item xs={12}>
                    <label className="labelMovie">Genres:</label>
                        {this.state.genres.map((genre, key) => {
                            if(typeof this.state.genres[key+1] === 'undefined'){
                            return (
                                <label>
                                    {genre.name}
                                </label>
                            
                            )
                            }else{
                                return (
                                    <label>
                                        {genre.name}, &nbsp;
                                    </label>
                                
                                )
                            }

                        }, this)}
                    
                </Grid>
                <Grid item xs={12}>
                    <label className="labelMovie">Overview</label>: {this.state.overview}
                </Grid>
                <Grid item xs={12}>
                    <img src={urlImg + this.state.backdrop_path}></img>
                </Grid>
            </Grid>
            </Paper>
            <Button onClick={this.backToList} variant="contained">
                Back
            </Button>
            </Grid>
        </div>
    )
  }
}
export default Movie;