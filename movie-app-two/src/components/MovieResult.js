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
        return(
            // <div className="movie_result" onClick={this.state.onClick}></div>
                <p onClick={this.state.onClick} className="movie_result">{this.props.movie.Title}, {this.props.movie.Year}</p>
            
        );

    }
}

export default MovieResult;