import React, { Component } from 'react';
import API from '../utils/API';

class Home extends Component {
  state = {
    search: '',
    results: [],
    error: '',
    message: 'Your book is saved'
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBookList(this.state.search)
      .then( res => {
        if (res.data.status === 'error') {
          throw new Error(res.data.items)
        }
        this.setState({ results: res.data.items, error: '' });
      })
      .catch( err => this.setState({ error: err.message }))
  }

  render() {
    return(
      <div>
        allo
      </div>
    )
  }
}

export default Home;