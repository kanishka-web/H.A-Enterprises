import React from 'react';
import { data } from "../data/products.js";

const Products = () => {
    const product=data;
  return (
<div name='products' className=' text-gray-300 bg-[#0a192f]' style={{marginTop:"30px"}}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-gray-300'>
        OUR PRODUCTS:
          </p>
          {/* <p className='py-6'>hhh</p> */}
        </div>

{/* container for Education */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {product.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.pic})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider block ">
        {item.name}
      </span>
      <span className="text-xl my-[0.5px] font bold text-white tracking-wider block ">
        {item.description}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.linkOfCert} target="_blank">
          <button
            className="text-center rounded-lg px-4 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Certificate
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  )
}

export default Products