import React, { Component } from "react";
// import Header from "../components/Header/Header.js";
import Banner from "../components/Banner/Banner.js";
import Search from "../components/Search/Search.js";
import Results from "../components/Results/Results.js";
import Book from "../components/Book/Book.js";
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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };
    render() {
        return (
            <div>
                <Banner />
                <Search />
                <Results>
                    {/* {this.state.books.map(book => ( */}
                        <Book
                            // key={book.id}
                            // title={book.volumeInfo.title}
                            // subtitle={book.volumeInfo.subtitle}
                            // link={book.volumeInfo.infoLink}
                            // authors={book.volumeInfo.authors.join(", ")}
                            // description={book.volumeInfo.description}
                            // image={book.volumeInfo.imageLinks.thumbnail}
                            // Button={() => (
                            //     <button
                            //         onClick={() => this.handleBookSave(book.id)}
                            //         className="btn btn-primary ml-2">Save</button>
                            // )}
                        />
                    {/* ))} */}
                </Results>

            </div>
        )
    }
}


export default Home;