import React from 'react'

const Email = () => {
  return (
    <div name="email" className='bg-[#0a192f] flex justify-center items-center p4' style={{marginTop:"30px"}}>
        <form action="https://getform.io/f/9a835fc1-2714-4a23-8176-e4c1338cb396" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-gray-300'>ENQUIRE US:</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot an email at - h_a_enterprises@yahoo.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Email