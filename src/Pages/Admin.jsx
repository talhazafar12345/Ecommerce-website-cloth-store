






import Footer from "../Footer/Footer"
import Hero32 from "../Sections/Hero32"
import { useEffect } from "react"
function Admin() {

useEffect(()=>{
window.scrollTo(0,0)
},[])
  return (
    <div>

    <Hero32 />

     <div className="fti">
        <Footer />
        </div>
      
    </div>
  )
}

export default Admin
