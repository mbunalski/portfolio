import React from 'react'

import GitHub from '../assets/github.png'
import SQL from '../assets/sql.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Java from '../assets/java.png'
import Python from '../assets/python.png'



const Skills = () => {
  return (
    <div name='skills'>
      {/*Container*/}
      <div className='bg-[#0a192f]'>
        <div>
          <p>Experience</p>
          <p>// These are the techologies I am most proficient with in order</p>
        </div>

        <div>
          <img src={Python} alt="Python Icon" />
        </div>
      </div>
      
    </div>
  )
}

export default Skills