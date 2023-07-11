import { Component } from "react";
import Movilist  from "./movielist";
import Navbar from "./navbar";
import{movies} from "./movieData"
class App extends Component {

    constructor(){
       super();
        //Creating the state object 
        this.state = {

            movies: movies,
            cart:0,
          
        } 
  }

  handleAddStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].stars <5){
        movies[movieId].stars += 0.5
    }

    this.setState({
        movies
    });
  }

  handleDecStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].stars > 0){
        movies[movieId].stars -= 0.5;
    }

    this.setState({
        movies
    })
 
  }

  handleToggleFav = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
        movies
    })
  }

  handleAddtocart = (movie)=> {
    let {movies,cart} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    if( movies[movieId].isInCart)
    {
        cart+=1;
    }
    else{
        cart-=1;
    }

    this.setState({
        movies,
        cart
    })
  }
    render(){

        const {movies,cart}=this.state;
        return(
        <>
        <Navbar carts={cart}/>
        <Movilist 
                    movies={movies}
                   onIncStars = {this.handleAddStars}
                   onDecStars = {this.handleDecStars}
                   onClickFav = {this.handleToggleFav}
                   onClickAddtocart = {this.handleAddtocart}/>
        </>
        )
        
    }
}

export default App;             