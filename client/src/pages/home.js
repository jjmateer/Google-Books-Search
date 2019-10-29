import React, { Component } from "react";
import API from "../API.js";
import Banner from "../components/Banner";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";
import Book from "../components/Book";
import { List, ListItem } from "../components/List";
class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search For A Book!"
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };
    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res =>
                // console.log(res.data.items)
                this.setState({
                    books: res.data.items
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
        return (
            <div>
                <Banner />
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
                <Card title="Results">
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book.id}>
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
                                                className="btn btn-light"> Save</button>
                                        )}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h2 className="text-center">{this.state.message}</h2>
                        )}
                </Card>
            </div>
        )
    }
}
export default Home;