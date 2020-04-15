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

  const allMoviesLink = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
  const selectedMovieLink = `http://www.omdbapi.com/?t=${movieImbdId}&apikey=${apiKey}`
  const movieImbdId = "";
  const movieQuery = "";
  const apiKey = "2480f3a";
  getMovieData = () => {
   fetch("http://www.omdbapi.com/?apikey=b91ba3c6&")
     .then(response => response.json())
     .then(result => this.setState(
           {
             selectedMovie: result
           },
         () => console.log("setState Completed", this.state.selectedMovie)
       )
     );
  };


  render() {
    return(
      <HomePage />
    );
     
  }
}
export default App;

