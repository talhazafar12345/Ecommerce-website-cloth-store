


import Hero1 from "../Sections/Hero1"
import { cartContext } from "../Sections/Hero30"
import { useContext } from "react"
import { useEffect } from "react"




function Cart() {

useEffect(()=>{
window.scrollTo(0,0)
},[])

const {cart,increaseQuantity,decreaseQuantity,totalPrice,remove} = useContext(cartContext)
  
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
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>
          {
            cart.map((item)=>(

              <tr>
                <td><img src={item.image} width="100px" alt="" /></td>
                <td className="newPrice"> $ {item.newPrice}</td>
                <td>
                  <div className="qty-box">
                    <button className="qty-btn" onClick={()=>decreaseQuantity(item.cartId)}>-</button>
                    <span className="newPrice">{item.quantity}</span>
                    <button className="qty-btn" onClick={()=>increaseQuantity(item.cartId)}>+</button>
                  </div>
                </td>
                <td>
                  <button onClick={()=>remove(item.cartId)} className="remove-btn">Remove</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>


      {
      cart.length > 0 && (
        <div className="cart-btn">
          <button>Check Out </button>
        </div>
      )
      }

    </div>





)
}





















  </div>






















      
    </div>
  )
}

export default Cart
