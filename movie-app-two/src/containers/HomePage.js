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
    clickedMovieIndex : null
    };
    }

    onClick = (movieIndex) => {
        this.setState({clickedMovieIndex : movieIndex });
        console.log('onlick works');
        console.log(movieIndex);
    }
    

    render() {
        let searchArray = [];
        searchArray = this.props.searchResults;
        console.log(searchArray);
        let display;

        if (!searchArray) {
            display = "Loading";
        } else {
            display = searchArray.map((movie, index) => <MovieResult movie={movie} onClick={() => this.onClick(index)} key={index} movieIndex={index} array={searchArray}/>)
        }

        let displayMovie;

        if (this.state.clickedMovieIndex != null)  {
            console.log(searchArray);
            console.log(searchArray[0]);
            console.log(searchArray[this.state.clickedMovieIndex]);
            console.log(searchArray[this.state.clickedMovieIndex].Poster);
            displayMovie = <MoviePoster 
                    posterUrl={searchArray[this.state.clickedMovieIndex].Poster}
                    movieTitle={searchArray[this.state.clickedMovieIndex].Title}
                    movieYear={searchArray[this.state.clickedMovieIndex].Year}
            />;
        } else {
            displayMovie = ".";
        }

        return(
            <div className="homepage">
                <div className="searchResults">
                    {display}
                </div>
                <div className="display">
                    {displayMovie}
                </div>
            </div>
        );
    }

}



export default HomePage;