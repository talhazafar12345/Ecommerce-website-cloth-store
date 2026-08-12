import Footer from "../Footer/Footer"
import Hero13 from "../Sections/Hero13"
import { useEffect } from "react"





function Kids() {

useEffect(()=>{
window.scrollTo(0,0)
},[])
  return (
    <div>

    <Hero13 />

    <div className="fti">
    <Footer />

    </div>
      
    </div>
  )
}

export default Kids
