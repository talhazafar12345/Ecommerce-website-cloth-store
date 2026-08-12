import Footer from "../Footer/Footer"
import Hero16 from "../Sections/Hero16"
import { useEffect } from "react"




function Shoes() {

useEffect(()=>{
window.scrollTo(0,0)
},[])
  return (
    <div>

    <Hero16 />
    
    <div className="fti">
    <Footer />

    </div>
      
    </div>
  )
}

export default Shoes
