import React from 'react'
import './ProdDetails.scss'
import { content } from '../../content'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const ProdDetails = () => {
    const {id}=useParams()
    const product = content.products.find((data) => data.prod_id === parseInt(id));
  return (
    <div className='details-main'>
        <Navbar/>
      <div className="heading">
        <div className="back"><Link className="back-btn" to='/'>Back</Link></div>
        <h1>Product Details</h1>
        </div>
        <div className="prodDetails">
            <div className="prodDetailsLeft">
                <div className="image"><img src={product.image} alt="" /></div>
            </div>
            <div className="prodDetailsRIght">
                <h2>₹ {product.price}</h2>
                <p className='name'>{product.name}</p>
                <p className='description'>{product.description}</p>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProdDetails
