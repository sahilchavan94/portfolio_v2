import React from 'react'
import { Link } from 'react-router-dom'

const Projectcomponent = ({name,description,color,link,img}) => {
  return (
    <div className='bg-mobile md:bg-card p-5 lg:p-7 w-[95%] md:w-[27.5rem] rounded-lg lg:rounded-2xl text-start'>
      <div className="logo" style={{color:color}}>
        <img src={img} className='md:h-60 h-40 w-full object-cover rounded-md lg:rounded-2xl opacity-80' alt="" />
      </div>
      <div className="project-name text-start mt-6 text-3xl font-bold" style={{color:color}}>
        {name}
      </div>
      <div className="project-description text-sm md:text-base text-white/90 text-start mt-4 font-normal overflow-hidden h-24 md:h-28 opacity-75">
        {description}
      </div>
     <Link target='_blank' to={link}><button style={{color:"#ffffff",fontWeight:600,backgroundColor:color,marginTop:"3.5rem"}} className='px-10 py-2 rounded-md'>Visit</button></Link>
    </div>
  )
}

export default Projectcomponent
