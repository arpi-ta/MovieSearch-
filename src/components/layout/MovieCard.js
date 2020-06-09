import React from 'react';

export default function MovieCard(props){
    const movie=props.movie;
    return(
        
        <div className="card" key={movie.id}>
                    <div className="row">
                    <div className="col-md-4">
                    <img className="card-image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                     </div>
                    
                    <div className="col-md-8">
                    <div className="card-content">

                        <div className="card-title">
                            <h3>{movie.original_title}</h3>
                            <p>{movie.overview}</p>
                        </div>
                  </div> 
                 </div>
                 </div>
                 </div>
                
                  
    )
}