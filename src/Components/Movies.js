import React, { Component } from 'react'
// import {movies} from './getMovies'
import axios from 'axios';

export default class Movies extends Component {
  constructor(){
    super();
    this.state={
      hover:'',
      parr:[1],
      currPage:1,
      movies:[],
  }
  }
  async componentDidMount(){
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cb7012bf697e01ee5513c946a67f2fe9&language=en-US&page=${this.state.currPage}`);
    let data = res.data;
    // console.log(data);
    this.setState({
      movies:[...data.results]
    })
  }

  changeMovies=async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cb7012bf697e01ee5513c946a67f2fe9&language=en-US&page=${this.state.currPage}`);
    let data = res.data;
    // console.log(data);
    this.setState({
      movies:[...data.results]
    })
  }

  handleRight=()=>{
    let temparr=[]
    for(let i=1;i<=this.state.parr.length+1;i++){
      temparr.push(i);
    }
    this.setState({
      parr:[...temparr],
      currPage:this.state.currPage+1
    },this.changeMovies)
  }

  handleLeft=()=>{
    if(this.state.currPage!==1){
      this.setState({
        currPage:this.state.currPage-1
      },this.changeMovies)
    }
  }
  handleClick=(value)=>{
    if(value!==this.state.currPage){
      this.setState({
        currPage:value
      },this.changeMovies)
    }
  }
  render() {
    // let movie=movies.results
    return (
      <>{this.state.movies.length===0?
        <div className="spinner-border text-primary" role="status">
       <span className="sr-only">Loading...</span>
     </div>:
     <div>
        <h3 className='text-center'><strong>Trending</strong></h3>
        <div className='movies-list' >
            {
                this.state.movies.map((movieobj)=>(
                    <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieobj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                    <img src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`} alt = {movieobj.title} className="card-img-top movies-img"/>
                    {/* <div className="card-body"> */}
                      <h5 className="card-title movies-title">{movieobj.original_title}</h5>
                      {/* <p className="card-text movies-text">{movieobj.overview}</p> */}
                      <div className='button-wrapper' style={{display:'flex', width:'100%', justifyContent:'center'}}>
                       
                      {
                        this.state.hover===movieobj.id &&
                        <a className="btn btn-primary movies-button">Add to Favourites</a>
                      }
                      
                      </div>
                    {/* </div> */}
                    </div>
                ))
            }
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <nav aria-label="Page navigation example">
           <ul class="pagination">
           <li className="page-item"><a className="page-link" onClick={this.handleLeft}>Previous</a></li>
            {
              this.state.parr.map((value)=>(
                <li className="page-item"><a className="page-link" onClick={()=>this.handleClick(value)}>{value}</a></li>
              ))
            }
               <li className="page-item"><a className="page-link" onClick={this.handleRight}>Next</a></li>
           </ul>
        </nav>
        </div>
     </div>

    }
      
      </>
    )
  }
}