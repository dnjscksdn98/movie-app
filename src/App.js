import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // we need to wait while fetching the data, so add async to the function
  // and add await where we're gonna wait for
  getMovies = async () => {
    // fetching the API
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
    );
  }
}

export default App;
