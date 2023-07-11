
import MovieCard from "./movie.js";

const MovieList =(props)=>{
   
    
  
    
        const {movies, onIncStars,onDecStars,onClickFav,onClickAddtocart} =  props;
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {index}
                           incStars={onIncStars}
                           decStars={onDecStars}
                           clickFav={onClickFav}
                           clickAddtocart={onClickAddtocart}
                          />

            ))}              
            </div>
        )
    }


export default MovieList;