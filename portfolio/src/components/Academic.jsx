import React from 'react'

export const Academic = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#5cf300]'>
            Academic Work
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid gap-8 px-4'>
            {/*Container*/}
            <div className=' text-xl font-bold'>
              <p>I am attedning Georgia Insitute of Technology and prusuing a master's degree in Computer Science.I am planning to graduate in May 2024. 
                My degree has a concentration in both Machine Learning and Interactive Intelligence. Below you will see the classes I have taken and 
                notable projects completed or knowledge gained.
              </p>
            </div>
            <div>
              <p className='font-bold'>6200</p>
              <p>Project</p>
              <p>knowledge</p>
              <p className='font-bold'>6242</p>
              <p>Project</p>
              <p>knowledge</p>
              <p className='font-bold'>6035</p>
              <p>Project</p>
              <p>knowledge</p>
              <p className='font-bold'>6300</p>
              <p>Project</p>
              <p>knowledge</p>
              <p className='font-bold'>6476</p>
              <p>Project</p>
              <p>knowledge</p>
              <p className='font-bold'>6750</p>
              <p>Project</p>
              <p>knowledge</p>
              <p className='font-bold'>7637</p>
              <p>Project</p>
              <p>knowledge</p>
              <p className='font-bold'>7641</p>
              <p>Project</p>
              <p>knowledge</p>
              <p className='font-bold'>7646</p>
              <p>Project</p>
              <p>knowledge</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Academic