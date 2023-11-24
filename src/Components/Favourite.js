import React, { Component } from 'react'
import {movies} from './getMovies'

export default class Favourite extends Component {
  constructor(){
    super();
    this.state={
      genres:[],
      currgen:'All Genres',
      movies:[],
      currText:'',
    }
  }
  componentDidMount(){
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};

    let data = JSON.parse(localStorage.getItem("movies-app") || '[]')
    let temp =[];
    data.forEach((movieObj)=>{
      if(!temp.includes(genreids[movieObj.genre_ids[0]])){
        temp.push(genreids[movieObj.genre_ids[0]]);
      }
    })
    temp.unshift('All Genres');
    this.setState({
      genres:[...temp],
      movies:[...data]
    })
  }
  handleGenreChange=(genre)=>{
    this.setState({
      currgen:genre
    })
  }
  render() {  
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    let filterarr=[];

    if(this.state.currText===''){
      filterarr=this.state.movies
    }else{
      filterarr=this.state.movies.filter((movieObj)=>{
        let title=movieObj.original_title.toLowerCase();
        return title.includes(this.state.currText.toLowerCase())
      })
    }
    
    // if(this.state.currgen==="All Genres"){
    //   filterarr=this.state.movies;
    // }else{
      if(this.state.currgen!=="All Genres"){
      filterarr= this.state.movies.filter((movieObj)=>genreids[movieObj.genre_ids[0]]===this.state.currgen)
    }
    
      return (
      <div>
        <>
        <div className='main'>
            <div className='row'>
                <div className='col-3'>
                <ul class="list-group favourites-genres">
                  {
                     this.state.genres.map((genre)=>(
                      this.state.currgen === genre ?
                      <li class="list-group-item " style={{backgroundColor:'#007bff',color:'white'}}>{genre}</li>:
                      <li class="list-group-item " style={{backgroundColor:'white',color:'#007bff'}} onClick={()=>this.handleGenreChange(genre)}>{genre}</li>
                     ))
                  }
                </ul>
                </div>
                <div className='col-9 favourites-table'>
                    <div className="row">
                        <input type="text" className='input-group-text col' placeholder='Search' value={this.state.currText} onChange={(e)=>this.setState({currText:e.target.value})}/>
                        <input type="number" className='input-group-text col' placeholder='Rows Count' />
                    </div>
                    <div className="row">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Populariry</th>
                            <th scope="col">Rating</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                           filterarr.map((movieObj)=>(
                              <tr>
                              <td> <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} style={{width:'5rem'}}/> {movieObj.original_title}</td>
                              <td>{genreids[movieObj.genre_ids[0]]}</td>
                              <td>{movieObj.popularity}</td>
                              <td>{movieObj.vote_average}</td>
                              <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            ))
                          }
                          
                        </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                           
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                          
                        </ul>
                        </nav>
                </div>
            </div>
        </div>
        </>
      </div>
    )
  }
}
