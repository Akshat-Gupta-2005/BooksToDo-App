import React from 'react'
import { Link } from 'react-router-dom';

const AddBtn = () => {
  return (
    <div>
      {/* <button onClick={()=>{}}>Add</button> */}
      <Link to="/search">Add</Link>
    </div>
  )
}

export default AddBtn
