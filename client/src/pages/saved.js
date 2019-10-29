import React, { Component } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Book from "../components/Book";
import API from "../API";
import { List, ListItem } from "../components/List";
class Saved extends Component {
    state = {
        books: [],
        message: "You have no saved books."
    }

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                // console.log(res.data)
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <Banner />
                <Card title="Saved Books">
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book.id}>
                                    <Book
                                        key={book._id}
                                        title={book.title}
                                        subtitle={book.subtitle}
                                        link={book.link}
                                        authors={book.authors}
                                        description={book.description}
                                        image={book.image}
                                        Button={() => (
                                            <button
                                                onClick={() => this.handleBookDelete(book._id)}
                                                className="btn btn-danger ml-2">Delete</button>
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

export default Saved;