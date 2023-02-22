import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieSection from "./MovieSection";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
    };
    this.apiKey = process.env.React_APP_API;
  }

  handleSubmit = (e) => {
    e.preventdefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ movies: [...data.results] });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Navbar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <MovieSection movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
