import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Library() {
  return (<>
    <div className='library'>
        <h1 className='text'>Library</h1>
     <div className='searchbox'><input placeholder='Search all photos' className='search'></input><FontAwesomeIcon icon="fas fa-search" size='2x' className='seicon' /></div>
    </div>
    <div className='items'>
      
     <span className='item'> <NavLink exact to="/" activeclassname="active" >All photos
</NavLink></span>
<NavLink to="architect" activeclassname="active"><span className='item'>Architecture</span></NavLink>
        <span className='item'>Kashmir</span>
        <span className='item'>Seaside</span>
        <span className='item'>Lakeview</span>
        <span className='item'>Italy</span>
        <span className='item'>China</span>
        <span className='item'>Argentina</span>
       
<button className='btn'>+ New category</button>
     </div>
      </>
  )
}

export default Library