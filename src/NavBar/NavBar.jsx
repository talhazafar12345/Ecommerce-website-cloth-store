import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero2 from "../Sections/Hero2"
import Hero3 from "../Sections/Hero3"
import Hero36 from "../Sections/Hero36"
import Hero4 from "../Sections/Hero4"
import Hero5 from "../Sections/Hero5"
 import Hero6 from "../Sections/Hero6"
import Hero7 from "../Sections/Hero7"
import { useEffect } from "react"







function NavBar() {

useEffect(()=>{
window.scrollTo(0,0)
},[])

  return (
    <div>

    <Hero1 />
    <Hero2 />
    <Hero3 />
    <Hero4 />
    <Hero36 />
     <Hero5 /> 
    <Hero6 /> 
    <Hero7 />
    <Footer />
      
    </div>
  )
}

export default NavBar
