import { motion, useMotionValue, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const Parallax = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [variant, setVariant] = useState("initial")

  const cursorVariant = {
    initial: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        transformOrigin: 0,
        type: "spring",
        stiffness: 500,
        mass: 1
      }

    },
    tap: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      background: "yellow",
      mixBlendMode: "difference",
      transition: {
        transformOrigin: 0,
        type: "spring"
      }
    }
  }
  useEffect(() => {
    const motionValue = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", motionValue);

    return () => {
      window.removeEventListener("mousemove", motionValue)
    }
  }, [])
  return (
    <>
      <div
        className="bg-[yellow] h-screen"
      >
        <motion.div
          className="cursor pointer-events-none fixed top-0 left-0 w-[20px] h-[20px] bg-black"
          variants={cursorVariant}
          animate={variant}
          whileTap="tap"
        >
        </motion.div>
        <div
          className="text-5xl font-bold"
          onMouseEnter={() => setVariant("tap")}
          onMouseLeave={() => setVariant("initial")}
        >
          HELLO WORLD
        </div>
        <div className="text-5xl font-bold text-red-700">
          HELLO WORLD
        </div>
      </div>
    </>
  )
}

export default Parallax