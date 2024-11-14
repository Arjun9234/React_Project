import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>

      </div>
      <div className="descriptionbox-description">
        <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services 
            over the internet. It serves as a virtual marketplace where business and individuals can showcase their products,interact with
            customers, and conduct tramsactions without the nedd for a physical presence. E-commerce website have gained immense 
            popularity due to their convenience, accessbility, and the global reach they offer.
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorum similique adipisci? Magnam incidunt
             adipisci nesciunt id maiores deleniti voluptatem sed nisi laborum ullam dolorum vitae dolores facilis quia,
              optio dolor libero modi ab. Molestiae, natus magnam! Vel, fugiat recusandae?
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
