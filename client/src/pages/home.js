import React, { Component } from "react";
// import Header from "../components/Header/Header.js";
import Banner from "../components/Banner/Banner.js";
import Search from "../components/Search/Search.js";
import Results from "../components/Results/Results.js"
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
                <Results />
            </div>
        )
    }
}


export default Home;