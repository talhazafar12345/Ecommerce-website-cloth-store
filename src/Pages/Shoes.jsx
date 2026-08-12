import Footer from "../Footer/Footer"
import { useEffect } from "react"
import Hero18 from "../Sections/Hero18"




function Shoes() {

useEffect(()=>{
window.scrollTo(0,0)
},[])
  return (
    <div>

    <Hero18 />
    
    <div className="fti">
    <Footer />

    </div>
      
    </div>
  )
}

export default Shoes
