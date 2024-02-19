import React from 'react'
import { Link } from 'react-router-dom'
import tinycolor from 'tinycolor2'

const Projectcomponent = ({name,description,color,link,img,technologies}) => {
  return (
    <div className='bg-mobile md:bg-card p-5 md:p-6 w-[95%] md:w-[23.5rem] rounded-lg lg:rounded-2xl text-start'>
      <div className="logo" style={{color:color}}>
        <img src={img} className='md:h-48 h-40 w-full object-cover rounded-md lg:rounded-lg opacity-80' alt="" />
      </div>
      <div className="project-name text-start mt-6 text-3xl font-semibold" style={{color:color}}>
        {name}
      </div>
      <div className="project-description text-sm text-text_light opacity-60 text-start mt-4 font-normal overflow-hidden h-24 md:h-20">
        {description}
      </div>
      <div className="tech flex justify-start gap-3 flex-wrap mt-3 md:mt-6 h-8">
        {technologies.map((t)=>{
          return <div className='text-sm h-fit px-3 rounded-sm' style={{backgroundColor:t.color,
          color:"rgb"+(t.color.split(", 0.1")[0] + ")").split("rgba")[1]
          }}>
            
            {t.name}
          </div>
        })}
      </div> 
     <Link target='_blank' to={link}><button style={{color:"#ffffff",fontWeight:600,backgroundColor:color,marginTop:"3.5rem"}} className='px-10 py-[.4rem] opacity- rounded-md'>Visit</button></Link>
    </div>
  )
}

export default Projectcomponent
