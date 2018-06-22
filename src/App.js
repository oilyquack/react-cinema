import React from "react";
import Header from "./Header";
import Display from "./Display";
import Movies from "./Movies";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      mainPoster: ""
    };

    this.receiver = this.receiver.bind(this);
    this.receiveMainPoster = this.receiveMainPoster.bind(this);
  }

  receiver(movies) {
    this.setState({
      movies: movies.Search,
      mainPoster: movies.Search[0].Poster
    });
    console.log(movies);
  }

  receiveMainPoster(mainPoster) {
    this.setState({
      mainPoster
    });
    console.log(mainPoster);
  }

  render() {
    return (
      <div className="app">
        <Header receiver={this.receiver} />

        <Display mainPoster={this.state.mainPoster} />

        <Movies
          receiveMainPoster={this.receiveMainPoster}
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default App;
