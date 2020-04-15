import React from 'react';
import HomePage from './containers/HomePage';

 class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
      movieSearchResults : null
    };
  }

  
  // const movieImbdId = "";
  
  // getMovieData = () => {
    let movieQuery = "matrix";
    let apiKey = "2480f3a";
    let allMoviesLink = `http://www.omdbapi.com/?s=${movieQuery}&apikey=${apiKey}`
    // let selectedMovieLink = `http://www.omdbapi.com/?t=${movieImbdId}&apikey=${apiKey}`
   fetch(allMoviesLink)
     .then(response => response.json())
     .then(result => this.setState(
           {
            movieSearchResults: result
           },
         () => console.log("setState Completed", this.state.movieSearchResults)
       )
     );
  };

  componentDidMount() {
    // this.getMovieData();
  }


  render() {
    return(
      // {this.state.movieSearchResults}
      <HomePage results={this.state.movieSearchResults}/>
    );
     
  }
}
export default App;

