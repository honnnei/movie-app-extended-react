import React from 'react';
import HomePage from './containers/HomePage';

 class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
      selectedMovie : null
   };
   }

   componentDidMount() {
    this.getMovieData();
  }

 
  getMovieData = () => {
  const movieImbdId = "";
  const movieQuery = "avengers";
  const apiKey = "2480f3a";
  const allMoviesLink = `http://www.omdbapi.com/?s=${movieQuery}&apikey=${apiKey}`
  // const selectedMovieLink = `http://www.omdbapi.com/?t=${movieImbdId}&apikey=${apiKey}`
   fetch(allMoviesLink)
     .then(response => response.json())
     .then(result => this.setState(
           {
             selectedMovie: result.Search
           },
         () => console.log("setState Completed", this.state.selectedMovie)
       )
     );
  };


  render() {
    return(
      <HomePage searchResults={this.state.selectedMovie} />
    );
     
  }
}
export default App;

