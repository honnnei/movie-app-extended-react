import React from 'react';

class MoviePoster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes : 0
        };
      }
    upVote = () => {
        this.setState({
            votes : this.state.votes + 1
        });
    }

    downVote = () => {
        this.setState({
            votes : this.state.votes - 1
        });
    }


    render() {
        let movieDetails;
        if (!this.props.posterUrl) {
            movieDetails = ".";
        } else {
            movieDetails =
            <div className="displayedMovieInfo">
                <h2>{this.props.movieTitle}</h2>
                <h3>{this.props.movieYear}</h3>
                <img src={this.props.posterUrl}></img>
                <button onClick={this.upVote}>Up Vote!</button>
                <button onClick={this.downVote}>Down Vote!</button>
                {this.state.votes}
            </div>
        }

        return(
        <div>
            {movieDetails}
        </div>
        );

    }
   

}

// <div className="posterSpace">
// <MovieInfo poster={this.props.movie.Poster}/>
// </div>

export default MoviePoster;