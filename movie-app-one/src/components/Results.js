import React from 'react';
import MovieResult from './MovieResult';

class Results extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    movieResults : this.props.allResults
    };
    }
    

    render() {
        console.log(this.state.movieResults);
       
        return(
            <h1>hiresults</h1>
        //    <div className="results">
        //        {this.state.movieResults.map(movie => (
        //         <MovieResult title={movie.Title} />
        //        ))}
        //    </div>
        );
    }

    // rating={movie.Rating} poster={poster} movieId={imdbID}
}

export default Results;