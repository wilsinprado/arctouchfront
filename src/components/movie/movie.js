// Importando o React
import React, { Component } from "react";
import * as MovieRoutes from '../../routes/movie';

class Movie extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      id: this.props.match.params.id,
   };
    this.getItems = this.getItems.bind(this);
  }

  getItems() {
    
    const id = this.props.match.params.id;
    MovieRoutes.default.getMovie(id)
      .then(response => {
        this.setState(response.data);
    }).catch(() => { console.log('Erro ao recuperar os dados'); });
  }
  
  componentDidMount() {
      this.getItems()
  }


  render() {
    return (
        <div>
            
        </div>
    )
  }
}
export default Movie;