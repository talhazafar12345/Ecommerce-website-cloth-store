





import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./Hero30";


function Hero1() {

const {cart} = useContext(cartContext)


const[open,setOpen] = useState(false)
useEffect(() => {
  return () => {
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";

  };

}, []);
const openMenu=()=>{
 const scrollY = window.scrollY
 document.body.style.position ="fixed"
 document.body.style.width ="100%"
 document.body.style.top = `-${scrollY}px`
 setOpen(true)
}

const closeMenu =()=>{
const scrollY = Math.abs(parseInt(document.body.style.top || 0) )
document.body.style.position = ""
document.body.style.width = ""
window.scrollTo(0, scrollY)
setOpen(false)
}



  
  return (

      <div className="hero1-container">
      <div className="navBar">
        <div className="navImage">
          <img
            src="https://chawkbazar.vercel.app/assets/images/logo.svg"
            alt="Logo"
          />
        </div>
        <div className="navLinks">
          <Link  className="link">Collections</Link>
          <Link  className="link">Mens Wear</Link>
          <Link  className="link">Womens Wear</Link>
          <Link  className="link">Kids</Link>
          <Link  className="link">Admin</Link>
        </div>
        <div className="add-cart">
          <Link  className="add-link">
          <i className="fa-solid fa-cart-arrow-down add"></i>
          <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
        <div onClick={openMenu}  className="hamburger">
          ☰
        </div>
      </div>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="navImages">
          <img
            src="https://chawkbazar.vercel.app/assets/images/logo.svg"
            alt="Logo"
          />
        </div>
        <div onClick={closeMenu} className="close-btn">
          ✕
        </div>
        <Link to={"/"} className="side-link">
        Collections
        </Link>
        <Link className="side-link">
          Mens Wear
        </Link>
        <Link  className="side-link">
          Womens Wear
        </Link>
        
        <Link  className="side-link">
          Admin
        </Link>
      </div>
    </div>
    
  );
}
export default Hero1;
