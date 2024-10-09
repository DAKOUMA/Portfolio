import Landing from "../Components/Home/Landing"
import Scroll from "../Components/Home/Scroll"

const Home = () => {
  
  return (
    <main className="pt-10 md:w-[90%] xl:w-[1280px] xl:px-16 mx-auto overflow-hidden">
      <Landing/>
      <Scroll/>
    </main>
  )
}

export default Home