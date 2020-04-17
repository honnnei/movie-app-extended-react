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
        if (!this.props.movieDetails) {
            movieDetails = ".";
        } else {
            movieDetails =
            <div className="displayedMovieInfo">
                <h2>{this.props.movieDetails.Title}</h2>
                <h3>{this.props.movieDetails.Released}</h3>
                <h2>{this.props.movieDetails.Runtime}</h2>
                <h3>{this.props.movieDetails.Genre}</h3>
                <h2>{this.props.movieDetails.Director}</h2>
                <h3>{this.props.movieDetails.Actors}</h3>
                <img src={this.props.movieDetails.Poster}></img>
                <div className="votes_div">
                    <button className="btn btn-outline-danger red_button" onClick={this.upVote}>Up Vote!</button>
                    {this.state.votes}
                    <button className="btn btn-outline-danger red_button" onClick={this.downVote}>Down Vote!</button>
                </div>
            </div>
        }

        return(
        <div className="long_div">
            {movieDetails}
        </div>
        );

    }
   

}

// <div className="posterSpace">
// <MovieInfo poster={this.props.movie.Poster}/>
// </div>

export default MoviePoster;