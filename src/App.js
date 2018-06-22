import React from "react";
import Header from "./Header";

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
      <div>
        <Header receiver={this.receiver} />
      </div>
    );
  }
}

export default App;
