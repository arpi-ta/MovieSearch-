import React from "react";

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

const moviesSearch= async (e) =>{
    e.preventDefault();
    console.log('Done');

    const query = "Jurassic Park";
    
    const url = `https://api.themoviedb.org/3/movie/550?api_key=c4a23c8d107c646c2c8ae07cebf349c0&language=en-US&query=${query}&page=1&include_adult=false`;

    const res = fetch(url);
       console.log(res);

}

export default function SearchMovies(){

    return(
      
         <form className="form" onSubmit={moviesSearch}>
            
            <input style={FormStyle}   className="input" type="text" name="query"
                placeholder="  i.e. Jurassic Park"/>
                <br></br>
            <button style={ButtonStyle} className="button" type="submit">Search</button>
        </form>
      
    )
}