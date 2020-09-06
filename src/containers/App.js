import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./Apps.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { users, searchfield } = this.state;
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !users.length ? (
      <h1 className="tc">Loading....</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList list={filteredUsers} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
