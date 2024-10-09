import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { helpYou } from './scroll.data'

import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";;
import { ImMail } from "react-icons/im";

import { carAvalaible, carRental, easyGo, easyGo1 } from '../../images/image'



const Scroll = () => {
    const refCont = useRef(null)

    const { scrollYProgress } = useScroll({ target: refCont })
    const backgroundScroll = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.6, 0.9, 0.95, 1], ["#ffffff", "#3fb5ef", "#3fb5ef", "#e6001e", "#e6001e", "#ffffff", "#ffffff"])

    const portfolio2Scroll = useTransform(scrollYProgress, [0, 0.55, 0.7, 1], ["100vh", "100vh", "-100vh", "-100vh"])
    const contactScroll = useTransform(scrollYProgress, [0, 0.9, 1], ["-100vh", "-100vh", "0vh"])

    const carScroll = {
        opacityTitle: useTransform(scrollYProgress, [0, 0.1, 0.21, 0.5, 0.55, 1], [0, 0, 1, 1, 0, 0]),
        yTitle: useTransform(scrollYProgress, [0, 0.1, 0.21, 0.5, 0.55, 1], ["100vh", "100vh", "0vh", "0vh", "100vh", "100vh"]),
        scale1: useTransform(scrollYProgress, [0, 0.2, 0.25, 0.5, 0.55, 1], [0, 0, 1, 1, 0, 0]),
        scale2: useTransform(scrollYProgress, [0, 0.3, 0.35, 0.5, 0.55, 1], [0, 0, 1, 1, 0, 0]),
        link: useTransform(scrollYProgress, [0, 0.35, 0.45, 0.5, 0.55, 1], ["100vh", "100vh", "0vh", "0vh", "100vh", "100vh"])
    }

    const goScroll = {
        opacityTitle: useTransform(scrollYProgress, [0, 0.6, 0.7, 0.85, 0.9, 1], [0, 0, 1, 1, 0, 0]),
        yTitle: useTransform(scrollYProgress, [0, 0.6, 0.7, 0.85, 0.9, 1], ["100vh", "100vh", "0vh", "0vh", "100vh", "100vh"]),
        scale1: useTransform(scrollYProgress, [0, 0.7, 0.8, 0.85, 0.9, 1], [0, 0, 1, 1, 0, 0]),
        scale2: useTransform(scrollYProgress, [0, 0.7, 0.8, 0.85, 0.9, 1], [0, 0, 1, 1, 0, 0]),
        link: useTransform(scrollYProgress, [0, 0.7, 0.8, 0.85, 0.9, 1], ["100vh", "100vh", "0vh", "0vh", "100vh", "100vh"])
    }

    useEffect(() => {
        const logthis = () => {
            console.log(scrollYProgress)
        }

        window.addEventListener("scroll", logthis)

        return () => window.removeEventListener("scroll", logthis)
    })
    return (
        <motion.article ref={refCont} style={{ backgroundColor: backgroundScroll }} className='h-[1500vh] scroll'>
            <motion.div
                id='help'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='pt-10'
            >
                <h1 className='text-4xl lg:text-6xl font-black text-center my-16'>Can I Help You ?</h1>
                <p className='text-center mx-10 leading-8 lg:leading-10 lg:text-xl'>I work as a Freelancer and I am present on many freelance platforms such as Upwork, Guru, Fiverr... With my Freelance status and my Skills, I can offer my service in the following areas:</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-[60px] py-5'>
                    {
                        helpYou.map((value, index) => (
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1, transition: { delay: 0.3 } }} whileTap={{ scale: 0.9 }} drag dragConstraints={{ left: 1, right: 1, top: 1, bottom: 1 }} whileDrag={{ zIndex: 20 }} key={index} className='flex cursor-pointer flex-col items-center border mx-auto px-2 py-4 rounded-md bg-slate-50'>
                                <span className='bg-white border w-8 h-8 flex items-center justify-center rounded-full'>{index + 1}</span>
                                <p className='font-normal my-5'>{value.title}</p>
                                <img className='h-32' src={value.img} alt="" />
                            </motion.div>
                        ))
                    }
                </div>
            </motion.div>

            <aside id='myPortfolio' className='my-28 pt-10'>
                <h1 className='text-4xl lg:text-8xl font-black text-center my-16 text-white'>My Portfolio</h1>
                <h1 className='text-4xl lg:text-8xl font-black my-16 text-white border-white rounded-full border-4 w-20 h-20 lg:w-40 lg:h-40 flex items-center justify-center mx-auto'>1</h1>
                <div className='carRental relative'>
                    <motion.h1 style={{ opacity: carScroll.opacityTitle, y: carScroll.yTitle }} className='text-4xl lg:text-6xl font-black text-center my-16 text-white fixed top-0 left-0 right-0'>AZURE RENT</motion.h1>
                    <motion.img style={{ scale: carScroll.scale1 }} className='fixed top-[200px] shadow-md shadow-stone-600 rounded-sm w-[300px] sm:w-[500px] lg:w-[700px] xl:w-[1000px] mx-auto left-0 right-0' src={carRental} alt="" />
                    <motion.img style={{ scale: carScroll.scale2 }} className='fixed top-[280px] shadow-md shadow-stone-600 rounded-sm w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px] mx-auto left-60 xl:left-[500px] right-0' src={carAvalaible} alt="" />
                    <motion.div style={{ y: carScroll.link }} className='text-white fixed bottom-10 left-0 mx-auto right-0 w-fit text-center items-center flex flex-col'>
                        <h1 className='text-xl font-medium'>Link</h1>
                        <a href="https://github.com/DAKOUMA/car-Rental.git" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium my-2'><FaGithub className='' color='white' /> Github </a>
                        <a href="https://azure-theta.vercel.app/" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium'><IoLogoVercel color='white' /> Vercel Demo </a>
                    </motion.div>
                </div>
                <div className='easyGo relative'>
                    <motion.div style={{ y: portfolio2Scroll }} className='fixed top-0 bottom-0 left-0 right-0'>
                        <h1 className='text-4xl lg:text-8xl font-black text-center my-16 text-white'>My Portfolio</h1>
                        <h1 className='text-4xl lg:text-8xl font-black my-16 text-white border-white rounded-full border-4 w-20 h-20 lg:w-40 lg:h-40 flex items-center justify-center mx-auto'>2</h1>
                    </motion.div>
                    <motion.h1 style={{ opacity: goScroll.opacityTitle, y: goScroll.yTitle }} className='text-4xl lg:text-6xl font-black text-center my-16 text-white fixed top-0 left-0 right-0'>EASY GO</motion.h1>
                    <motion.img style={{ scale: goScroll.scale1 }} className='fixed top-[200px] shadow-md shadow-stone-600 rounded-sm w-[300px] sm:w-[500px] lg:w-[700px] xl:w-[900px] mx-auto left-0 right-0' src={easyGo} alt="" />
                    <motion.img style={{ scale: goScroll.scale2 }} className='fixed top-[280px] shadow-md shadow-stone-600 rounded-sm w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px] mx-auto left-60 xl:left-[500px] right-0' src={easyGo1} alt="" />
                    <motion.div style={{ y: goScroll.link }} className='text-white fixed bottom-10 left-0 mx-auto right-0 w-fit text-center items-center flex flex-col'>
                        <h1 className='text-xl font-medium'>Link</h1>
                        <a href="https://github.com/DAKOUMA/Easy-go.git" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium my-2'><FaGithub color='white' /> Github </a>
                        <a href="https://easy-go-iota.vercel.app/" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium'><IoLogoVercel color='white' /> Vercel Demo </a>
                    </motion.div>
                </div>
                <motion.div style={{ y: contactScroll }} className='fixed top-[30%] bottom-0 left-0 right-0'>
                    <h1 className='text-4xl lg:text-8xl font-black text-center my-16 '>Contact Me</h1>
                    <div className='flex justify-center items-center gap-7'>
                        <a href="https://www.upwork.com/freelancers/~01cca8d7bf3706a015" className='hover:scale-110 hover:-translate-y-2 transition-all active:scale-50' ><FaSquareUpwork color='#00cc66' size={"3rem"} /></a>
                        <a href="https://www.linkedin.com/in/anselme-ramerison-066999186/" className='hover:scale-110 hover:-translate-y-2 transition-all active:scale-50' ><RxLinkedinLogo color='#0099cc' size={"3rem"} /></a>
                        <a href="mailto:ramerison.anselme@gmail.com" className='hover:scale-110 hover:-translate-y-2 transition-all active:scale-50' ><ImMail color='#ff6666' size={"2.6rem"} /></a>
                    </div>
                </motion.div>
            </aside>
        </motion.article>
    )
}

export default Scroll