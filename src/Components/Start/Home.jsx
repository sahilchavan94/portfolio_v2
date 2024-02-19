import React from 'react'
import Intro from './Intro'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Connect from '../About/Connect'
import NativeProjects from '../Projects/Nativeprojects'


const Home = () => {
  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <Intro/>
      <About/>
      <Skills/> 
      <Projects/> 
      <NativeProjects/>
      <Connect/> 
    </div>
  )
}

export default Home
