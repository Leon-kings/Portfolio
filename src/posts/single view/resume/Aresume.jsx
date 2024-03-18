import React from 'react'
import { blog } from '../../../assets/data/tria/data'
import { Link } from 'react-router-dom'


function Aresume() {
  return (
    <section className='category'>
       <div className='container grid3'>
    
    {blog.map((item) => (
          
  
          <div className='box boxItems' key={item.id}>
            <a href='/details'>
            <div className='img'>
            <Link to={`/details/${item.id}`}>
              <img src={item.cover} alt='images' />
              </Link>
            </div>
            </a>

          </div>
           ))},
     
      </div>
  </section>
  )
}

export default Aresume