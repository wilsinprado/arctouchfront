import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as MovieRoutes from '../../routes/movie';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



class List extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            listaItens: [],
            limit: "",
            next: "",
            offset: "",
            previous: "",
            total: "",
            page: 0,
            rowsPerPage: 10
         };
        this.getItems = this.getItems.bind(this);
        this.filterTableByName = this.filterTableByName.bind(this);
    }


    getItems() {
        
        let filter = this.prepareFilter(this.props.filter);
        MovieRoutes.default.getUpcomingItens(filter).then(response => {
          this.setState({ listaItens: response.data.results });
        }).catch((err) => {
          console.log(err);
        });
    }

    prepareFilter(filter){
        Object.keys(filter).forEach((key) =>{
            if(filter[key] == "") {
                delete filter[key];
            }
        });
        return filter;
    }
      
    componentDidMount() {
        this.getItems();
    }

    filterTableByName(){
        let stateAtual = this.state.listaItens;
        const stateFiltrado = stateAtual.filter( itens =>  {
            return itens.original_title === this.props.filter.name
        });
        this.setState({listaItens: stateFiltrado});
    }

    componentDidUpdate(prevProps){
        if (prevProps.filter.name !== this.props.filter.name) {
            this.filterTableByName();
        }

        if (this.props.filter.name === ""){
            this.getItems();
        }
    }

    handleChangePage = (event, page) => {
        this.setState({ page });

    };


    render() {
        const { listaItens, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, listaItens.length - page * rowsPerPage);
        const widthCell = {
            'minWidth': '200px'
        }
        const urlImg = 'http://image.tmdb.org/t/p/w185/';
        const movieUrl = 'movie/';
        return (
            <Grid item xs={12}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Paper >
                        <div>
                        <Table>
                            <TableBody>
                                {listaItens.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                                    <div>
                                        <TableRow key={row.id} >
                                            <TableCell align="right" style={widthCell}>
                                                <img src={urlImg + row.backdrop_path}></img>
                                            </TableCell>
                                            <TableCell align="right" style={widthCell}>
                                                <a href={movieUrl + row.id}>{row.original_title}</a>
                                            </TableCell>
                                            <TableCell align="right" style={widthCell}>{row.release_date}</TableCell>
                                        </TableRow>
                                    </div>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow>
                                    <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        </div>
                        <TablePagination
                            component="div"
                            count={listaItens.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page',
                            }}
                            onChangePage={this.handleChangePage}
                        />
                    </Paper>
                </Grid>
            </Grid>
        )
      }
}
export default connect((state) => {
    return { filter: state.filter};
})(List);