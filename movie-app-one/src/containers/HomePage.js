import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Results from '../components/Results';
import MovieResult from '../components/MovieResult';


class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    searchedMovies : this.props.searchResults
    };
    }

    

    render() {
        let searchArray = [];
        searchArray = this.props.searchResults;
        console.log(searchArray);
        let display;

        onClick = (event) => { 
            event.preventDefault();
            
            movieDisplay = <MovieInfo title={this.props.movie.Title} year={this.props.movie.Year} poster={this.props.movie.Poster} />
            
            console.log(this.props.movieIndex);
        }
        

        if (!searchArray) {
            display = "Loading";
        } else {
            display = searchArray.map((movie, index) => <MovieResult onClick={onClick} movie={movie} key={index} movieIndex={index} array={searchArray}/>)
        }

        return(
            <div className="homepage">
                {/* <Header />
                <Search />
                <Results /> */}
                <div className="searchResults">
                {display}
                </div>
            </div>
            
        );
    }

}



export default HomePage;