import React, { useState } from "react"
import "./details.css"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/tria/data"


function DetailsPages() {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

 useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])
  return (
    <>
    {blogs ? (
      <section className='singlePage'>
        <div className='container'>
          <div className='left'>
            <img src={blogs.cover} alt='' />
          </div>
          <div className='right'>
            <div className='buttons'>
              <button className='button'>
                <BsPencilSquare />
              </button>
              <button className='button'>
                <AiOutlineDelete />
              </button>
            </div>
            <h1>View our blog</h1>
            <p>{blogs.desc}</p>
            {/* <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
              I will give you a complete account of the system, and expound the actual teachings of the great explorer of 
              the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
               because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter 
               consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to 
               obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil 
               and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes 
               laborious physical exercise, except to obtain some advantage from it? But who has any right to find 
               fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids 
               a pain that produces no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written 
               by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
               voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non 
               provident."</p> */}
            <p>Author: Leon</p>
            <p>Call us on: +250-78-7944-577</p>
          </div>
        </div>
      </section>
    ) : null}
  </>  
  )
}

export default DetailsPages