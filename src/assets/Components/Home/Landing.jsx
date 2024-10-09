import { motion } from "framer-motion"

import { typingVariant1, typingVariant2, typingVariant3 } from './variantText'
import { anselme, canva, css, figma, gimp, html, inkscape, javascript, react } from "../../images/image"
import { LiaCaretDownSolid } from "react-icons/lia";

const Landing = () => {

    const TypingComponent = ({ text, variant }) => {

        return (
            <motion.span
                className='text-2xl'
                variants={variant}
                initial="initial"
                animate="animate"
            >
                {text.split("").map((value, index) => <motion.span key={index} variants={variant}>{value}</motion.span>)}
            </motion.span>
        )
    }

    return (
        <article id="landing" className="flex flex-col gap-7 lg:gap-20 items-center lg:flex-row lg:items-start lg:pt-28 pt-20 h-screen">
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="w-[350px] h-[300px] cursor flex-2"
                style={{ background: `url(${anselme})`, backgroundSize: "cover" }}
                alt=""
            />
            <motion.div
                className="px-3 flex-1 text-center lg:text-start"
            >
                <div>
                    <TypingComponent text="Hi, I am a " variant={typingVariant1} /> <br /> <br />
                    <motion.span initial={{ x: "200vh" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 40, delay: 5 }} className="text-5xl font-black inline-block">UI/UX </motion.span>
                    <TypingComponent text=" designer, " variant={typingVariant2} /> <br />
                    <motion.span initial={{ x: "200vh" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 40, delay: 8.2 }} className="text-5xl font-black inline-block">Front-End </motion.span>
                    <TypingComponent text=" developer" variant={typingVariant3} />
                </div>
                <motion.div
                    className="mt-6 overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ delay: 12, duration: 0.5 }}
                >
                    <span>My name is .</span>
                    <span className="font-normal text-xl">RAMERISON ANSELME</span>
                    <span>. I live in Toamasina, Madagascar.  </span>
                    <div className="flex gap-6 justify-center md:justify-normal mt-4">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={javascript} alt="" />
                        <img src={react} alt="" />
                        <img src={figma} alt="" />
                        <img src={inkscape} alt="" />
                        <img src={canva} alt="" />
                        <img src={gimp} alt="" />
                    </div>
                </motion.div>
            </motion.div>
            <motion.div initial={{y: "100vh"}} animate={{y:"0vh"}} transition={{delay: 13}} className='flex flex-col items-center my-12 lg:absolute bottom-0 left-0 right-0'>
                <span className='text-xl'>Scroll Down</span>
                <motion.div initial={{y: -5}} animate={{y: 5}} transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5}}><LiaCaretDownSolid/></motion.div>
            </motion.div>
        </article>
    )
}

export default Landing