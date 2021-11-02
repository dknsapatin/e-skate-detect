import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      eskaters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ eskaters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredEskaters = this.state.eskaters.filter((eskaters) => {
      return eskaters.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="title">Eskate Mentors</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList eskaters={filteredEskaters} />
      </div>
    );
  }
}

export default App;
