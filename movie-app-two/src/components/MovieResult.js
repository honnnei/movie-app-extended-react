import React from 'react';
import MovieInfo from './MovieInfo'


class MovieResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      index : this.props.key, 
      onClick : this.props.onClick
      };
      }

render() {
    // let movieDisplay =".";
    // this.displayMovieInfo = (event) => { 
    //     event.preventDefault();
        
    //     movieDisplay = <MovieInfo title={this.props.movie.Title} year={this.props.movie.Year} poster={this.props.movie.Poster} />
        
    //     console.log(this.props.movieIndex);
    //     // onClick={this.displayMovieInfo}
    // }
    
   
    return(
        <div className="movie_result" onClick={this.state.onClick} >
            <h1>{this.props.movie.Title}</h1>
            <h3>{this.props.movie.Year}</h3>
            {/* {movieDisplay} */}
           
        </div>
    );

}
}

export default MovieResult;