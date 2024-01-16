import React, { useRef, useEffect } from 'react'
import Projectcomponent from './Projectcomponent'
import { motion, useAnimation, useInView } from 'framer-motion'

export const Projects = () => {

    const ref = useRef(null)
    const mainControls = useAnimation()
    const isInView = useInView(ref,{once:true})


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            return
        }
    }, [isInView, mainControls])

    const projectData = [{
        link : "https://oncode.onrender.com",
        name: "Oncode",
        color: "#fb6976",
        description: "Oncode is a online web based coding utility cum community that enables you to store, organize and 🧑‍💻 compile your codes at one place along with a sharable real time compiler 🕐.Also a helpful community of your friends to solve your problems 😌."
    },{
        link : "https://github.com/sahil-gpm/chatrooms",
        name: "Chatrooms",
        color: "#4ade80",
        description: "Chatrooms is full stack mern app 💚 the allows you to create rooms of your personal interests using socket.io and connect with strangers 😌, initiate conversations and make friends 🤞"
    },{
        link : "https://github.com/sahil-gpm/newsfeed",
        name: "Newsfeed",
        color: "#1e3a8a",
        description: "Newsfeed is a API based application made with help of news api to fetch 📰 news according to your notionality 🇮🇳 and personal intersting categories ⌘"
    }, 
    ,{
        link : "https://variable.onrender.com",
        name: "Variable",
        color: "#f110af",
        description: "A simple sharable code editor made with ⚒️ Socket.io and Node.js that allows you and your friends to create code rooms 🤞 and code together sharing and increasing 💪 knowledge"
    }, 
    ,{
        link : "http://speak-it-nine.vercel.app",
        name: "SpeakIt",
        color: "#ffffff",
        description: "A simple web based ➡️ platform made with Node.js and MongoDB ✅ that enables you to learn langauges 💬 so that you can communicate easily"
    }, ]

    return (
        <motion.div className='mt-36 w-[90%] md:w-[90%] mx-auto text-center overflow-x-hidden'
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.25 }}>
            <div className="head text-4xl md:text-6xl font-bold text-white">
                Projects ⚒️ ↴
                <div className="sub text-white text-base font-normal mt-5">
                    These are some of my major projects ↦
                </div>
            </div>
            <div className="projects flex flex-wrap gap-4 justify-center mt-10">
                {projectData.map((p) => {
                    return (
                        <Projectcomponent name={p.name} color={p.color} description={p.description} link={p.link} />
                    )
                })}
            </div>

            
        </motion.div>
    )
}

export default Projects
