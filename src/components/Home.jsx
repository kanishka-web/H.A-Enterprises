import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Anil from '../assets/anil.jpg'
import Catalogue from '../assets/catalogue.pdf'

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f]'>
    {/* container */}
    <div className="grid grid-cols-3 gap-4 max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
      <div className="col-span-2 " style={{paddingTop:"10px"}}>
      <p className='text-pink-600' style={{paddingTop:"80px"}}>
        Welcome To,
       </p>
       <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>H.A ENTERPRISES</h1>
       <h3 className='text-xl sm:text-4xl font-bold text-[#8892b0]'>Authorised Distributor</h3>
       <p className='text-[#8892b0] py-2 max-w-[700px]'>H. A. Enterprises, a trusted name in the realm of welding and industrial solutions. We specialize in providing a wide array of high-quality products catering to the needs of various industries including construction, dairy, welding, paint, and more.

At H. A. Enterprises, we take pride in offering an exceptional assortment of products including Welding Rod, Abrasive Products, Chemical Earthing Electrode, Anti Spatter Spray, Auto Darkening Helmet, Crack Detection Kit, and more. Our products are crafted using the finest grade metal alloy and cutting-edge technology under the supervision of skilled professionals, ensuring precise dimensions, non-corrosive nature, high conductivity, and optimum efficiency.

Established in the year 2006 as a Sole Proprietorship firm based in Jalandhar, Punjab, India, we are committed to providing our clients with products that meet global standards. We are proud to be associated with renowned vendors in the market, enabling us to deliver a qualitative range of products at the most reasonable prices.

We invite you to explore our product range and experience the quality and reliability that H. A. Enterprises stands for. Should you have any inquiries or require assistance, our dedicated team is ready to assist. Feel free to reach out to us at +919814286271 or h_a_enterprises@yahoo.com. </p>
       <div className='flex items-center'>
       <Link to="products">
       <button className='border-2 group text-white px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Our Products
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3'/>
        </span>
     </button>
       </Link> 
       <button className='border-2 group text-white px-6 py-3 my-2 ml-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>
        <a href={Catalogue}>
        View Catalogue
       </a>
        
     </button>
    </div>
      </div>
      <div className='flex flex-col text-center items-center'>
      <img src={Anil} className='hero' alt='mypicture' />
      <p className='mx-8 text-gray-300 font-bold text-pink-600' style={{marginTop:"10px"}}>MANAGING DIRECTOR</p>
      <p className='mx-8 text-gray-300 font-bold' style={{marginTop:"5px"}}>Anil Kumar Gupta</p>
      <p className='mx-8 text-gray-300 font-bold' style={{marginTop:"5px"}}>&</p>
      <p className='mx-8 text-gray-300 font-bold' style={{marginTop:"5px"}}>Pratham Gupta</p>
    </div>
    </div>
   
</div>
  )
}

export default Home