import React, { Component } from "react";
// import Header from "../components/Header/Header.js";
import Banner from "../components/Banner/Banner.js";
import Search from "../components/Search/Search.js";
// import Results from "../components/Results/Results.js";
import Book from "../components/Book/Book.js";
import Card from "../components/Card/Card"
import { List } from "../components/List/List"
import API from "../API.js";

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search For A Book To Begin!"
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
    handleInputChange = event => {
        console.log(name)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
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
        return (
            <div>
                <Banner />
                <Search
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
                <Card>
                    <List>
                        {this.state.books.map(book => (
                            <Book
                                key={book.id}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                link={book.volumeInfo.infoLink}
                                authors={book.volumeInfo.authors.join(", ")}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                Button={() => (
                                    <button
                                        onClick={() => this.handleBookSave(book.id)}
                                        className="btn btn-primary ml-2">Save</button>
                                )}
                            />
                        ))}
                    </List>
                </Card>

            </div>
        )
    }
}


export default Home;