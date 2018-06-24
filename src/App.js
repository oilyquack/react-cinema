import React from "react";
import Header from "./Header";
import Display from "./Display";
import Movies from "./Movies";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      mainPoster: "",
      movie: [],
      mainTitle: "",
      mainID: ""
    };

    this.receiver = this.receiver.bind(this);
    this.receiveMainPoster = this.receiveMainPoster.bind(this);
  }

  receiver(movies) {
    this.setState({
      movies: movies.Search,
      mainPoster: movies.Search[0].Poster,
      mainTitle: movies.Search[0].Title,
      mainID: movies.Search[0].imdbID
    });
    console.log(movies);
  }

  receiveMainPoster(mainPoster, mainTitle, mainID, movie) {
    this.setState({
      mainPoster,
      movie,
      mainTitle,
      mainID
    });
    console.log(movie);
  }

  render() {
    return (
      <div className="app">
        <Header receiver={this.receiver} />

        <Display
          mainPoster={this.state.mainPoster}
          mainTitle={this.state.mainTitle}
          mainID={this.state.mainID}
          movie={this.state.movie}
        />

        <Movies
          receiveMainPoster={this.receiveMainPoster}
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default App;
