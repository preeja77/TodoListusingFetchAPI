import React from 'react'
import "./ImagesSectionStyles.css"

function ImagesSection() {
  return (
              <div className = "todoList-section">
                <img src = "https://res.cloudinary.com/df7enm0go/image/upload/v1695981632/covene-rVdcUsFhc4Q-unsplash_bguvpv.jpg" alt = "image1" className = "image1"/>
                <div className='list'>
                    <ul className=' list-items'>Benefits of  to do list
                        <li className='list-item'>Improves your memory</li>
                        <li className='list-item'>Increases productivity</li> 
                        <li className='list-item'>Helps with motivation</li>
</ul>
                </div>
    </div>
  )
}

export default ImagesSection
