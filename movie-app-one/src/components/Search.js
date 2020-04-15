import React from 'react';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    // selectedMovie : null
    };
    }

    render() {
        return(
           <div className="searchBox">
               <form className="searchForm">
                   <label for="searchTerm">Search Movies:</label>
                   <input type="text" name="searchTerm"></input>
                   <button type="submit">Search</button>
               </form>
        
           </div>
        );
    }

}

export default Search;