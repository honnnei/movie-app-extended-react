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

        if (!searchArray) {
            display = "Loading";
        } else {
            display = searchArray.map((movie, index) => <MovieResult movie={movie} key={index}/>)
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