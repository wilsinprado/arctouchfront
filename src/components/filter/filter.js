import React, { Component } from 'react';
import * as changeListAction from '../../actions/changeList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: ''
        };

        this.getFilters = this.getFilters.bind(this);

    }

    handleChange = event => {
     
      this.setState({ [event.target.name]: event.target.value });

      setTimeout(function(){
        this.props.changeList({name: this.state.name});
      }.bind(this), 500)
    };

    getFilters(){
        
    }

    componentDidMount(){
      this.getFilters();
    }

    render() {
        return (
          <div>
              <FormControl>
                <TextField
                  className="inputNameSearch"
                  id="name"
                  name="name"
                  label="Name"
                  onChange={this.handleChange}
                  margin="normal"
                />
              </FormControl>
            
          </div>
        )
      }
}

function mapDispatchToProps(dispatch, props) {
  return {
    dispatch,
    ...bindActionCreators({
      ...changeListAction
    }, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
 )(Filter);