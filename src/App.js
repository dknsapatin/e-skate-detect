import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { eskaters } from "./eskaters";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      eskaters: eskaters,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filteredEskaters = eskaters.filter((eskaters) => {
      return eskaters.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !eskaters.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="title">Eskate Mentors</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList eskaters={filteredEskaters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
