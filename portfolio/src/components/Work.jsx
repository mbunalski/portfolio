import React from 'react'
import Empty from '../assets/suchempty.jpg'


const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        {/*Container*/}
        <div clasName='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full w-full'>

            <div>
                <p className='text-4xl border-[#5cf300] font-bold inline border-b-4 '>Work</p>
                <p className=' py-4 '>// Some of my recent work</p>
            </div>

            <div style={{backgroundImage: `url(${Empty})`}}
            className= 'grid sm:grid-cls-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover efects*/}
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
                            </a>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Work