import React from "react";

const config = {
  api: {
    omdb: {
      apiKey: "a46e4310",
      movie: "Network",
      url: "http://www.omdbapi.com/"
    }
  }
};

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: config.api.omdb.movie
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    fetch(
      `${config.api.omdb.url}?s=${this.state.movie}&apikey=${
        config.api.omdb.apiKey
      }`
    )
      .then(response => response.json())
      .then(result => {
        this.props.receiver(result);
      })
      .catch(error => {
        console.log("Sorry, I couldn't find that. Try another film.");
      });
  }

  handleChange(event) {
    event.preventDefault();

    this.setState({
      movie: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.fetchMovie();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="Lights... Camera..."
          type="text"
        />
        <button>Action</button>
      </form>
    );
  }
}

export default Search;
