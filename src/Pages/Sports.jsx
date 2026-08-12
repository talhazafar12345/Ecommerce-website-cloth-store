import Footer from "../Footer/Footer"
import Hero19 from "../Sections/Hero19"
import { useEffect } from "react"




function Sports() {

useEffect(()=>{

window.scrollTo(0,0)
},[])
  return (
    <div>


    <Hero19 />

     <div className="fti">
    <Footer />
    </div>
      
    </div>
  )
}

export default Sports
