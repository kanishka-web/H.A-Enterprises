import React from 'react'
import Catalogue from '../assets/catalogue.pdf'
import {FaFacebook,FaLocationArrow,FaMobileAlt,FaWhatsapp} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='w-full h-[100px] flex text-center px-4 bg-[black] text-gray-300' name="footer">
    <div className='w-full'>
     
           <ul className='flex items-center justify-center py-4'>
           <li className='w-[60px] h-[60px] flex items-center bg-blue-600 mx-4'>
                <a className='flex items-center w-full text-gray-300 py-4' href='tel:9814286271'>
            <FaMobileAlt size={30}/>
                </a>
            </li>
                <li className='w-[60px] h-[60px] flex items-center bg-blue-600 mx-4'>
                <a className='flex items-center w-full text-gray-300 py-4' href='/'>
            <FaWhatsapp size={30}/>
                </a>
            </li>
            <li className='w-[60px] h-[60px] flex justify-between items-center  bg-[#65c2b0]'>
                <a className='flex items-center w-full text-gray-300 py-4' href='mailto:h_a_enterprises@yahoo.com'>
            <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[60px] h-[60px] flex justify-between items-center  bg-blue-600 mx-4'>
                <a className='flex items-center w-full text-gray-300 py-4' href='/'>
           
            
            <FaFacebook size={30}/>
                </a>
            </li>
            <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#565f69]'>
                <a className='flex items-center w-full text-gray-300 py-4'  href={Catalogue}>
        
            <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
            <li className='w-[60px] h-[60px] flex justify-between items-center bg-[skyblue] mx-4'>
                <a className='flex items-center w-full text-gray-300 py-4'  href="https://maps.google.com?q=Bosch%20Dealer%20in%20Jalandhar%20%7C%20H.A%20Enterprises,%20Hardeep%20Nagar,%20Jalandhar,%20Punjab%20144001&ftid=0x391a5b1cf494c339:0x485b93a8f4683234&hl=en-IN&gl=in&entry=gps&lucs=,47071704">
        
            <FaLocationArrow size={30}/>
                </a>
            </li>
       
           </ul>
    </div>
</div>
  )
}

export default Footer