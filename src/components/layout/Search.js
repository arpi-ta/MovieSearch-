import React, {useState} from "react";

const FormStyle={
    width:'80%',
    height:'25px',
    marginBottom:'10px',
    borderRadius:'15px',
    fontSize:'1.2rem'
    
}
const ButtonStyle={
    width:'150px',
    margin:'0 auto',
    backgroundColor:'blue',
    border: 'none',
    color:'white',
    borderRadius: '4px',
     height:'30px',
    cursor: 'pointer',
    

}



export default function SearchMovies(){

    const [query,setQuery]=useState('');

    const [movies,setMovies]=useState([]);


    const moviesSearch= async (e) =>{
        e.preventDefault();
        
    

        const url = `https://api.themoviedb.org/3/search/movie?api_key=c4a23c8d107c646c2c8ae07cebf349c0&language=en-US&query=${query}&page=1&include_adult=false`;
    
      
    
           try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return(
      
        <div className="container">
         <form className="form" onSubmit={moviesSearch}>
            
            <input style={FormStyle}   className="input" type="text" name="query"
                placeholder="  i.e. Jurassic Park" 
                value={query}
                onChange={ (e)=> setQuery(e.target.value)}
                 />
                <br></br>
            <button style={ButtonStyle} className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie=>(
                <div className="card" key={movie.id}>
                    <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                    <div className="card-content">

                        <div className="card-title">
                            <h3>{movie.original_title}</h3>
                            <p>{movie.overview}</p>
                        </div>
                 </div>
                  </div>

            ))}
       
            
         </div>
         </div>
      
    )
   
}