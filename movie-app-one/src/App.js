import React from 'react';
import HomePage from './containers/HomePage';
// import {
//   Link,
//   Route,
//   Switch,
//   BrowserRouter as Router
// } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      movieQuery: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    
   

  }


  handleChange(event) {
    event.preventDefault();
    this.setState({movieQuery: event.target.value});
    if (this.state.movieQuery.length > 5) {
    const movieImbdId = "";
    const apiKey = "2480f3a";
    const allMoviesLink = `http://www.omdbapi.com/?s=${this.state.movieQuery}&apikey=${apiKey}`
    // const selectedMovieLink = `http://www.omdbapi.com/?t=${movieImbdId}&apikey=${apiKey}`
    // fetch(allMoviesLink)
      .then(response => response.json())
      .then(result => this.setState({
          selectedMovie: result.Search
        },
        () => console.log("setState Completed", this.state.selectedMovie)
      ));
    }
    

  }

  render() {
    return ( 
      <div className = "App" >
        <div className = "searchBox" >
          <form className = "searchForm">
            <label for = "searchTerm" > Search Movies: </label> 
            <input type = "text" name = "searchTerm" value={this.state.movieQuery} onChange={this.handleChange}></input> 
            <button type = "submit" > Search </button> 
          </form> 
        </div> 
        <HomePage searchResults = {this.state.selectedMovie}/> 
      </div>
    );

  }
}
export default App;





// <div className="navbar">
// <Link to="/">Home</Link>
// <Link to="/about">About</Link>
// <Link to="/services">Services</Link>
// <Link to="/movies">Movies</Link>

// {/* <Route path="/" exact component={Index} /> */}
// <Route path="/about" component={About} />
// <Route path="/services" component={Services} />
// <Route path="/movies" component={() => <Movies list={ list }/>} />
// </div>