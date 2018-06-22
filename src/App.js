import React from "react";
import Header from "./Header";
import Display from "./Display";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };

    this.receiver = this.receiver.bind(this);
  }

  receiver(movies) {
    this.setState({
      movies: movies.Search
    });
    console.log(this.state.movies);
  }

  render() {
    return (
      <div className="app">
        <Header receiver={this.receiver} />

        <Display />
      </div>
    );
  }
}

export default App;
