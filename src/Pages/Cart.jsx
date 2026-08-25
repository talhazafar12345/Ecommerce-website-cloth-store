


import Hero1 from "../Sections/Hero1"
import { cartContext } from "../Sections/Hero30"
import { useContext } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../Footer/Footer"




function Cart() {

const navigate= useNavigate()

useEffect(()=>{
window.scrollTo(0,0)
},[])

const {cart,increaseQuantity,decreaseQuantity,totalPrice} = useContext(cartContext)
  
  return (
    <div>

    <Hero1 />

  <div className="cart-container">

  <div className="cart-total">
    <h2>Total Price $: {totalPrice}</h2>
  </div>

{
cart.length === 0 ? (

<h1> 🛒 Your Cart is empty </h1>
): (

    <div className="table-wrapper">

      <table className="cart-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
        
          </tr>
        </thead>


        <tbody>
          {
            cart.map((item,index)=>(

              <tr>
                <td className="newPrice">{index+1}</td>
                <td><img className="item-image" src={item.image} width="100px" alt="" /></td>
                 <td>
                  <p className="newPrice">$ {item.newPrice}</p>
                </td>
                <td>
                  <div className="qty-box">
                    <button className="qty-btn" onClick={()=>decreaseQuantity(item.cartId)}>-</button>
                    <span className="newPrice">{item.quantity}</span>
                    <button className="qty-btn" onClick={()=>increaseQuantity(item.cartId)}>+</button>
                  </div>
                  
                </td>

               
              </tr>
            ))
          }
        </tbody>
      </table>


      {
      cart.length > 0 && (
        <div className="cart-btn">
          <button onClick={()=>navigate(`/checkout-page`)}>Check Out </button>
        </div>
      )
      }

    </div>
)
}

  </div>
  <Footer />
    </div>
  )
}

export default Cart
