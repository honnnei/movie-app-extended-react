import React from 'react';
import MovieResult from './MovieResult';

class Results extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    // selectedMovie : null
    };
    }

    render() {
        return(
           <div className="results">
               <MovieResult />
               <MovieResult />
               <MovieResult /> 
           </div>
        );
    }

}

export default Results;