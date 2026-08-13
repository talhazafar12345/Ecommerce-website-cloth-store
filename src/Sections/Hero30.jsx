



import { createContext,useState,useEffect } from "react"


export const cartContext = createContext()

function Hero30({children}) {

const[cart,setCart] = useState(()=>{
const savedCart = localStorage.getItem("cart")
return savedCart? JSON.parse(savedCart):[]
})


useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cart))
},[cart])

const addToCart=(product)=>{

const cartId = product._id ? `mongoDB ${product._id}` : `hardcoded ${product.id}`
const existing = cart.find((item)=> item.cartId === cartId)
if(existing){
return
}
setCart([...cart,{...product,cartId,quantity:1}])
}

const increaseQuantity=(cartId)=>{
const increase = cart.map((item)=> item.cartId === cartId ? {...item,quantity:item.quantity+1}:item)
setCart(increase)
}

const decreaseQuantity=(cartId)=>{
const decrease = cart.map((item)=> item.cartId === cartId ? {...item,quantity:item.quantity-1}:item)
.filter((item)=> item.quantity > 0)
setCart(decrease)
}

const totalPrice = cart.reduce((total,item) => {
  return total + item.quantity * item.newPrice
}, 0)

const remove=(cartId)=>{
const del = cart.filter((item)=> item.cartId !==cartId)
setCart(del)
}

  return (
   <cartContext.Provider value={{cart,addToCart,increaseQuantity,decreaseQuantity,totalPrice,remove}}>
    {children}
</cartContext.Provider>
  )
}

export default Hero30
