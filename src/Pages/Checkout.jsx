import Footer from "../Footer/Footer"
import Hero31 from "../Sections/Hero31"

import { useEffect } from "react"




function Checkout() {

useEffect(()=>{
window.scrollTo(0,0)
},[])
  return (
    <div>

    <Hero31 />

     <div className="fti">
        <Footer />
        </div>
      
    </div>
  )
}

export default Checkout
