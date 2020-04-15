import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Results from '../components/Results';


class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    // selectedMovie : null
    };
    }

    render() {
        return(
            <div className="homepage">
                <Header />
                <Search />
                <Results />
            </div>
            
        );
    }

}



export default HomePage;