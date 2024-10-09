import { ram } from "../images/image"
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";;
import { ImMail } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 absolute left-0 right-0 border-t border-black">
      <div className="footer-container p-3 flex flex-col items-center gap-2 ">
        <h1 className="text-lg font-normal mb-2 md:text-xl">Contact me</h1>
        <a href="https://www.linkedin.com/in/anselme-ramerison-066999186/" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium' ><RxLinkedinLogo /> Likedin</a>
        <a href="https://www.upwork.com/freelancers/~01cca8d7bf3706a015" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium' ><FaSquareUpwork /> UpWork</a>
        
        <a href="mailto:ramerison.anselme@gmail.com" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium' ><ImMail /> Email</a>
      </div>
      <div className="footer-container p-3 flex flex-col items-center gap-2 border-black border-l border-r">
        <h1 className="text-lg font-normal mb-2 md:text-xl">Azure Car</h1>
        <a href="https://github.com/DAKOUMA/car-Rental.git" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium '><FaGithub className='' /> Github </a>
        <a href="https://azure-theta.vercel.app/" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium'><IoLogoVercel />  Demo </a>
      </div>
      <div className="footer-container p-3 flex flex-col items-center gap-2 ">
        <h1 className="text-lg font-normal mb-2 md:text-xl">Easy Go</h1>
        <a href="https://github.com/DAKOUMA/Easy-go.git" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium '><FaGithub /> Github </a>
        <a href="https://easy-go-iota.vercel.app/" className='flex items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all hover:font-medium'><IoLogoVercel />Demo </a>
      </div>
    </footer>
  )
}

export default Footer