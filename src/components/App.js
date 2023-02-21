import React, { Component } from "react";
import Navbar from "./Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
    }
    this.apiKey = process.env.React_APP_API;
  }

  handleSubmit= ()=>{
    fetch(``)
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
