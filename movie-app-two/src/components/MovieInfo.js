import React from 'react';

function MovieInfo(props) {
    let image;
    
    if (!props.poster) {
        image = "Image loading!";
    } else {
        image = <img src={props.poster}></img>
    }


    return(
        <div>{image}</div>
        
    );
}

export default MovieInfo;