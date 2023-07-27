import React from 'react'
import Empty from '../assets/suchempty.jpg'
import ComingSoon from '../assets/comingsoon.jpg'


const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        
        <div clasName='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full w-full'>

            <div className='sm:px-20 px-5'>
                <p className='text-4xl border-[#5cf300] font-bold inline border-b-4 '>Work</p>
                <p className=' py-4 '>// Some of my recent work</p>
            </div>

        {/*Container*/}
            <div className= 'px-5 lg:px-20 grid sm:grid-cls-2 md:grid-cols-3 gap-4'>

            {/*Grid Item*/}
                <div style={{backgroundImage: `url(${ComingSoon})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*hover efects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span clasName='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${ComingSoon})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*hover efects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span clasName='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                </div>

                            {/*Grid Item*/}
                            <div style={{backgroundImage: `url(${ComingSoon})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*hover efects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span clasName='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${ComingSoon})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*hover efects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span clasName='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                </div>

                            {/*Grid Item*/}
                            <div style={{backgroundImage: `url(${ComingSoon})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*hover efects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span clasName='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${ComingSoon})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*hover efects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span clasName='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center round-leg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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