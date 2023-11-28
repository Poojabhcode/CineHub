import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div style = {{display:'flex',padding:'0.5'}}>
        <Link to='/' style={{textDecoration:'none'}} > <h1 className='h1' style={{marginTop:'1rem',marginLeft:'1rem'}}><i class="fa-solid fa-film"></i>CineHub</h1></Link>
        <Link to='/favourites' style={{textDecoration:'none'}}><h2 className='h2' style={{marginLeft:'2rem',marginTop:'1.5rem'}}><i class="fa-brands fa-gratipay"></i>Favourites</h2></Link>
      </div>
    )
  }
}

