import React from "react";
import Header from "./Header";
import Display from "./Display";
import Movies from "./Movies";

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
  }

  render() {
    return (
      <div className="app">
        <Header receiver={this.receiver} />

        <Display />

        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
