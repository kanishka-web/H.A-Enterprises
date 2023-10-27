import React from 'react'
import repair from '../assets/repair.jpg';
import transport from '../assets/transport.jpg'

const Services = () => {
  return (
    <div name="services" className='bg-[#0a192f] text-gray-300' style={{marginTop:"30px"}}>
    <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* container div */}
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className=' pb-8'>
                <p className='text-4xl font-bold inline '>WHY US?
                </p>
            </div>
            <div></div>
            </div>

            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4 '>
            {/* <div className='sm:text-right text-4xl font-bold '> */}
            <div className='items-center'>
                <p className='text-4xl  text-pink-300 mb-4'>
                    In-House & On-Site Service & Repair
                </p>
                <p className='mt-4 mb-4'>
                    We have In-House Facility of repairing & service of <strong>Welding Machines, Power Tools.</strong> 
                </p>
                <img src={repair} alt="repairing" width={200} height={200} style={{borderRadius:"50%"}}/>
            </div>
            <div className='items-center'>
              <p className=' text-4xl text-pink-300 mb-4'>
                Door Delievery Facility
                </p> 
                <p className='mt-4 mb-4'>
              We have dedicated team to process and deliever your order on time.
                </p> 
                <img src={transport} alt="logistics" width={200} height={200} style={{borderRadius:"50%"}}/>
                </div>
                </div>

    </div>
    </div>
  )
}

export default Services