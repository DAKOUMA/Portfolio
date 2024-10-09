import { animate, AnimatePresence, motion, stagger } from "framer-motion"
import { useState } from "react";
import { HiOutlineXMark, HiOutlineBars3 } from "react-icons/hi2";


const Header = () => {
  const [open, setOpen] = useState(false)

  const variantDefault = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  }


  const NavTextComponent = ({ text, scroll }) => {

    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <motion.li
        className='inline-block cursor-pointer border-b border-black sm:border-none'
        variants={variantDefault}
        whileHover={{ color: "rgb(255, 80, 80)" }}
        transition={{ staggerChildren: 0.05 }}
        onClick={() => scrollToElement(scroll)}
      >{text.split("").map((value, index) => <motion.span key={index} variants={variantDefault} >{value}</motion.span>)}</motion.li>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white  sm:border-b sm:border-black">
      <nav>
        <AnimatePresence>
          {
            open ?
              <motion.ul variants={variantDefault} exit="exit" transition={{ staggerChildren: 1 }} initial="initial" animate="animate" className="flex flex-col gap-4 sm:flex-row justify-around items-center sm:hidden">
                <NavTextComponent text={"Who Am I?"} scroll={"landing"} />
                <NavTextComponent text={"Can I Help You?"} scroll={"help"} />
                <NavTextComponent text={"My Portfolio?"} scroll={"myPortfolio"} />
              </motion.ul>
              : ""
          }
        </AnimatePresence>
        <motion.ul variants={variantDefault} transition={{ staggerChildren: 0.8 }} initial="initial" animate="animate" className=" flex-col gap-4 sm:flex-row justify-around items-center hidden sm:flex">
          <NavTextComponent text={"Who Am I?"} scroll={"landing"} />
          <NavTextComponent text={"Can I Help You?"} scroll={"help"} />
          <NavTextComponent text={"My Portfolio?"} scroll={"myPortfolio"} />
        </motion.ul>
      </nav>
      <div className="absolute top-0 right-0 sm:hidden" onClick={() => setOpen(prev => !prev)}>
        {
          open ? <HiOutlineXMark size={"3rem"} /> : <HiOutlineBars3 size={"3rem"} />
        }
      </div>
    </header>
  )
}

export default Header