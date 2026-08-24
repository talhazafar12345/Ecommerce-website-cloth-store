



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

const[wishList,setWishList] = useState(()=>{
const savedCart = localStorage.getItem("wishList")
return savedCart? JSON.parse(savedCart):[]
})

useEffect(()=>{
localStorage.setItem("wishList",JSON.stringify(wishList))
},[wishList])

const addToWishList=(product)=>{
const cartId = product._id ? `mongoDb${product._id}` :`hardcoded${product.id}`
const existing = wishList.find((item)=> item.cartId === cartId)
if(existing){
return
}
setWishList([...wishList,{...product,cartId}])
}

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

const mitana=(cartId)=>{
const dele = wishList.filter((item)=> item.cartId !==cartId)
setWishList(dele)

}

const clearCart=()=>{
setCart([])
}

  return (
   <cartContext.Provider value={{cart,addToCart,increaseQuantity,decreaseQuantity,totalPrice,remove,clearCart,wishList,addToWishList,mitana}}>
    {children}
</cartContext.Provider>
  )
}

export default Hero30
