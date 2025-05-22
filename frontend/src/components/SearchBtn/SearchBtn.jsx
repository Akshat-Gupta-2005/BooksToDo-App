import React from 'react'
import { Link } from 'react-router-dom';
import './SearchBtn.css'

const AddBtn = () => {
  return (
    <Link to="/search" className='add-btnbox'>
      <div className='add-btn'>
        Search
      </div>
    </Link>
  )
}

export default AddBtn
