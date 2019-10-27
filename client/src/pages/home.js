import React, { Component } from "react";
import Banner from "../components/Banner/Banner.js";
import Search from "../components/Search/Search.js";
import Results from "../components/Results/Results.js";
import Book from "../components/Book/Book.js";
import API from "../API.js";
// import Container from "../components/Results/Results";

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search For A Book To Begin!"
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };
    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "No books found."
                })
            );
    };
    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };
    render() {
    }
}


export default Home;