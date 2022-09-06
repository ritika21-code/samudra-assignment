import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header() {
  return (<>
    <div className='heade'>
        <div ><FontAwesomeIcon className='icons' icon ="fa-solid fa-gear " size='2x'  />
        <FontAwesomeIcon className='icons' icon="fa-solid fa-bell" size='2x'/></div>
        <div className='events'>
            <span className='spa span1'>Timeline</span>
            <span className='spa'>Albums</span>
            <span className='spa'>Events</span>
            <span className='spa'>Favourites</span>
        </div>
        <div className='photos'>
        <FontAwesomeIcon icon="fa-solid fa-plus-circle" size='2x'  />
      <span className='text'>Upload Photos</span>
        </div>
    </div>
    <div className='head2'>
      <div className='timel'><span className='active2'>Timeline</span>  <FontAwesomeIcon icon="fa-solid fa-caret-down"   /> </div> <div className='icon2'><FontAwesomeIcon icon="fa-solid fa-plus-circle" size='2x'  /></div>
      </div></>
  )
}

export default Header
