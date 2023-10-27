import React, { useState } from 'react'
import {FaBars,FaTimes,FaFacebook,FaWhatsapp,FaMobileAlt,FaLocationArrow} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import Catalogue from '../assets/catalogue.pdf'


const Navbar = () => {
const [nav,setNav] = useState(false)
const handleClick=()=>{
    setNav(!nav)
}
  return (
    <div className='w-full h-[70px] fixed flex justify-between items-center px-4 bg-[#29a3a3] text-gray-300'>
    <div>
        <img src={Logo} alt='logo img' style={{width:"200px",height:"50px"}} />
    </div>
    {/* menu bar */}
       <ul className=' md:flex hidden px-2' style={{color:"white"}}>
            <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} duration={500}>About</Link></li>
            <li><Link to='products' smooth={true} duration={500}>Products</Link></li>
            <li><Link to='services' smooth={true} duration={500}>Services</Link></li>
            <li><Link to='email' smooth={true} duration={500}>Enquire</Link></li>
            <li><Link to='footer' smooth={true} duration={500}>Contact Us</Link></li>
        </ul>

    {/* hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {/* <FaBars /> */}
        {!nav?<FaBars/>:<FaTimes/>}
    </div>
    {/* mobile menu */}
    <ul className={!nav?"hidden":'absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center'} style={{color:"white"}}>
    <li><Link to='home' smooth={true} duration={500} onClick={handleClick}>Home</Link></li>
            <li><Link to='about' smooth={true} duration={500}onClick={handleClick} >About</Link></li>
            <li><Link to='products' smooth={true} duration={500} onClick={handleClick}>Products</Link></li>
            <li><Link to='services' smooth={true} duration={500} onClick={handleClick}>Services</Link></li>
            <li><Link to='email' smooth={true} duration={500} onClick={handleClick}>Enquire</Link></li>
            <li><Link to='footer' smooth={true} duration={500} onClick={handleClick}>Contact Us</Link></li>
        </ul>
    {/* social icons */}
    <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
           <ul>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[gray]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='tel:9814286271'>
            Call 
            <FaMobileAlt size={30}/>
                </a>
            </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[green]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            Whatsapp 
            <FaWhatsapp size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#65c2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='mailto:h_a_enterprises@yahoo.com'>
            EMail 
            <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[blue]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            Facebook 
            
            <FaFacebook size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'  href={Catalogue}>
            Catalogue
            <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[skyblue]'>
                <a className='flex justify-between items-center w-full text-gray-300'  href="https://maps.google.com?q=Bosch%20Dealer%20in%20Jalandhar%20%7C%20H.A%20Enterprises,%20Hardeep%20Nagar,%20Jalandhar,%20Punjab%20144001&ftid=0x391a5b1cf494c339:0x485b93a8f4683234&hl=en-IN&gl=in&entry=gps&lucs=,47071704">
            Location
            <FaLocationArrow size={30}/>
                </a>
            </li>
       
           </ul>
    </div>
</div>
  )
}

export default Navbar