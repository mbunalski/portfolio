import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/110573c5-ba9a-4cbe-8ce8-1f26785b1cb4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl border-[#5cf300] font-bold inline border-b-4 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email - justbunstuff@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
            <textarea name="message"  rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:border-[#5cf300] hover:bg-[#5cf300] px-4 py-3 mx-auto my-8 flex items-center'>Let's Collaborate</button>
        </form>
        
        
    </div>
  )
}

export default Contact