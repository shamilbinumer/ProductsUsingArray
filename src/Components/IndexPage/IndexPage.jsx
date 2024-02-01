import React from 'react'
import './IndexPage.scss'
import Navbar from '../Navbar/Navbar'
import { content } from '../../content'
import { Link } from 'react-router-dom'

const IndexPage = () => {
    // console.log(content.products);
  return (
    <div className='index-main'>
      <Navbar/>
      <div className="heading">
        <h1>PRODUCTS</h1>
        <div className="listProducts">
{/* /////////////CARD////////////////////////////////// */}
           {
            content.products.map((data,index)=>
            <div className="prods" key={index}>
            <Link className='link' to={`prodDetails/${data.prod_id}`}>
            <div className="caard">
                <div className="image"><img src={data.image} alt="" /></div>
                <h2 className='price'>₹ {data.price}</h2>
                <p className="name">{data.name}</p>
                <h3 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <button>Buy Now</button>
            </div>
            </Link>
        </div>)
           }
{/* /////////////CARD-END////////////////////////////////// */}
            
        </div>
      </div>
    </div>
  )
}

export default IndexPage
