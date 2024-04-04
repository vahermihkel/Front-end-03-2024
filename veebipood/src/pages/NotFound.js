import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      Lehekülje ei leitud!
      <Link to="/avaleht">Mine avalehele</Link>
    </div>
  )
}

export default NotFound