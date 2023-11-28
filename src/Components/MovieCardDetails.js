import React, { Component } from 'react'

export default class MovieCardDetails extends Component {
  constructor(){
    super();
    this.state={
      moviesdetail:[],
    }
  }

  componentDidMount(){
    let detailsData= JSON.parse(localStorage.getItem("movies-app2")||"[]")
    this.setState({
      moviesdetail:[...detailsData]
    })
  }
   
  render() {

    return (
      <div>
        { 
        this.state.moviesdetail.map((movieObj)=>(
        <div class="card" style= {{width: '35rem', textAlign: 'center', margin: '0 auto'}}>
        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}  class="card-img-top" alt="..." ></img>
    
  <div class="card-body">
    <h5 class="card-title">{movieObj.title}</h5>
    <p class="card-text">{movieObj.overview}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> Popularity: {movieObj.popularity}</li>
    <li class="list-group-item">Rating: {movieObj.vote_average}</li>
    <li class="list-group-item"> vote counting: {movieObj.vote_count} </li>
  </ul>
  <div class="card-body">
    <a href={`https://www.youtube.com/results?search_query=${movieObj.title} trailer`} class="card-link"> Watch The Trailer</a>
    {/* <a href="#" class="card-link">Another link</a> */}
  </div>
</div>
))}
      </div>
    )
  }
}
