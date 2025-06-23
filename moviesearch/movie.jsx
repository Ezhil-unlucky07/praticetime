import React, { useState } from 'react';


const API_KEY = 'MY API KEY'; 

export default function MovieSearch() {
  const [movietitle, setMovietitle] = useState('');
  const [movieyear,setMovieyear] = useState('')
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const Plot = 'full';
 
  const searchMovies = async () => {
    if (!movies) return;
    setLoading(true);
    setLoading ? setMovies([]) : '';
    setError('');
    setMovietitle('')
    setMovieyear('')
    
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movietitle}&y=${movieyear}&plot=${Plot}`
      );
      const data = await response.json();
      console.log(data)
      if (data.Response === 'True') {
        setMovies([data]);
        
      } else {
        if(movietitle===''){
          setError("Please Enter a Movie Name")
        }
        else{
        setError(data.Error);
        setMovies([]);}
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>🎬 Movie Search</h1>
      <input
        style={{padding:"10px",borderRadius:"10px",marginRight:"5px"}}
        value={movietitle}
        onChange={(e) => setMovietitle(e.target.value)}
        placeholder="Enter movie Name..."
      />
      <input type="text" maxLength={4} style={{padding:"10px",borderRadius:"10px"}}
      value={movieyear}
      onChange={(e)=> setMovieyear(e.target.value)}
      placeholder='Enter movie year'
      />
      <br/>
      <button style={{fontSize:"20px",marginTop:"10px",fontWeight:"bold",padding:"10px",borderRadius:"10px",cursor:"pointer"}} onClick={searchMovies}>Search</button>

        {loading && <h3>Loading...</h3>}
       {error && <p style={{ color: 'red' }}>{error}</p>}

       <div>

    {movies.map((movie) => (
      <div style={{margin:"7px"}} key={movie.imdbID}>
         <img src={movie.Poster} alt={movie.Title} height={400} /> 
        <h1>Name:{movie.Title}</h1>
        <h3>Released on : {movie.Released}</h3>
        <h3>Genre : {movie.Genre}</h3>
        <h3>Imdb : {movie.imdbRating}/10</h3>
        <h3>Directed By : {movie.Director}</h3>
        <h3>Type : {movie.Type}</h3>
        <h4 style={{width:"300px"}} >Description <br />{movie.Plot}</h4>
      </div>
    ))}
</div>


    
  </>
  );}
 
