import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Results from '../components/Results';


// class HomePage extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         allResults : props.results
//     };
//     }
    
//     render() {
//     console.log('from HP props:');
//     console.log(this.state.allResults);
//         return(
//             <div className="homepage">
//                 <Header />

//                 <Search />
//                 <Results />
//             </div>
            
//         );
//     }

// }

function HomePage(props)  {
    console.log(props.results);
  

        return(
            <div className="homepage">
                <Header />
                
                <Search />
                <Results allResults={props.results}/>
            </div>
            
        );
}





export default HomePage;