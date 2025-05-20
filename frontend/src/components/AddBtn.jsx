import React from 'react'
import { Link } from 'react-router-dom';
import './AddBtn.css'

const AddBtn = () => {
  return (
    <Link to="/search" className='add-btnbox'>
      <div className='add-btn'>
        Add
      </div>
    </Link>
  )
}

export default AddBtn
