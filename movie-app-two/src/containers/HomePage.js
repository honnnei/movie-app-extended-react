import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import MoviePoster from '../components/MoviePoster';
import MovieResult from '../components/MovieResult';
import MovieInfo from '../components/MovieInfo';


class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    searchedMovies : this.props.searchResults, 
    clickedMovieIndex : null, 
    clickedMovieImdbID : null,
    selectedMovie : null
    };
    }

    onClick = (movieIndex, imdbid) => {
        
        this.setState({clickedMovieIndex : movieIndex });
        this.setState({clickedMovieImdbID : imdbid });
        const apiKey = "2480f3a";
            const allMoviesLink = `http://www.omdbapi.com/?s=${this.state.movieQuery}&apikey=${apiKey}`
            const selectedMovieLink = `http://www.omdbapi.com/?i=${imdbid}&apikey=${apiKey}`
            fetch(selectedMovieLink)
            .then(response => response.json())
            .then(result => this.setState({
                selectedMovie: result
                },
                () => console.log("setState Completed", this.state.selectedMovie)
            ));
    
        // 
      }

    

    render() {
        let searchArray = [];
        searchArray = this.props.searchResults;
        console.log(searchArray);
        let display;

        if (!searchArray) {
            display = "Type in a query to display related movies.";
        } else {
            display = searchArray.map((movie, index) => <MovieResult movie={movie} onClick={() => this.onClick(index, movie.imdbID)} key={index} movieIndex={index} array={searchArray}/>)
        }

        let displayMovie;

        if (this.state.selectedMovie)  {
            displayMovie = <MoviePoster 
                    movieDetails={this.state.selectedMovie}
            />;
        }

        return(
            <div className="homepage long_div">
                <div className="searchResults">
                    {display}
                </div>
                <div className="display long_div"> 
                    {displayMovie}
                </div>
            </div>
        );
    }

}



export default HomePage;