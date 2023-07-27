import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#5cf300]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            {/*Container*/}
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Michael Bunalski. Please take a look around and reach out with any questions.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in process automation and simplilification. I create software to meet the needs of small and large business areas. What can I help you do better.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About