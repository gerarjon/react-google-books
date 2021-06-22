import React, { Component } from 'react';
import Container from "../components/Container";
import Searchbar from '../components/Searchbar';
import SearchResults from "../components/SearchResults";
import "../App.css";
import API from "../utils/API";
import M from 'materialize-css'


class Home extends Component {
    state = {
        search: '',
        results: [],
        error: '',
    }

    handleInputChange = (event) => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.getBookList(this.state.search) 
            .then(res => {
                if (res.data.status === 'error' ) {
                    throw new Error(res.data.items)
                }
                this.setState({results: res.data.items, error: ''});
            })
            .catch (err => this.setState({ error: err.message }))
    }

    handleSave = id => {
        let savedBooks = this.state.results.filter( book => book.id === id);
        savedBooks = savedBooks[0];
        let image = savedBooks.volumeInfo.imageLinks
        if (!image) {
            image = "";
        } else {
            image = savedBooks.volumeInfo.imageLinks.smallThumbnail;
        }

        const newBook = {
            title: savedBooks.volumeInfo.title,
            authors: savedBooks.volumeInfo.authors,
            description: savedBooks.volumeInfo.description,
            image: image,
            link: savedBooks.volumeInfo.previewLink
        }
        API.saveBook(newBook)
            .then(
                M.toast({html: `${newBook.title} was saved!`, displayLength: 1000}),
                console.log(this.state.message),
                console.log(savedBooks)
            )
            .catch( 
                err => this.setState({ error: err.message })
            )
            
    }

    render() {
        return(
            <Container>
                <Searchbar handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                <SearchResults results={this.state.results} handleSave={this.handleSave}/>
            </Container>
        )
    }
}

export default Home;