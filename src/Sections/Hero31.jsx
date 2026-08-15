
import Hero1 from "./Hero1"
import { useState } from "react"
import { cartContext } from "./Hero30"
import { useContext } from "react"
import axios from "axios"


function Hero31() {

const {cart,totalPrice,clearCart} = useContext(cartContext)
const[errors,setErrors] = useState({})
const[formData,setFormData] = useState({
name:"",
email:"",
whatsapp:"",
address:"",
})
const getInp=(e)=>{
const {name,value} = e.target
setFormData({...formData,[name]:value})
setErrors({...errors,[name]:""})
}

const validate=()=>{
const newErrors = {}
if(!formData.name){
newErrors.name ="Please enter your name"
}

if(!formData.email){
newErrors.email = "Please enter your email"
}

 else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
newErrors.email = "Please enter valid email"
}

if(!formData.whatsapp){
newErrors.whatsapp = "Please enter your whatsapp number"
}

if(!formData.address){
newErrors.address = "Please enter your delivery address"
}
return newErrors
}






const submit= async(e)=>{
e.preventDefault()
const validation = validate()
if(Object.keys(validation).length > 0){
setErrors(validation)
return
}

if(cart.length === 0){
alert("Select some products")
return
}

const orderData={
name:formData.name,
email:formData.email,
whatsapp:formData.whatsapp,
address:formData.address,
cart:cart,
totalPrice: `$${totalPrice}`,
}

try{
const response = await axios.post("http://localhost:5000/submit-Data",{orderData})
console.log(response)
alert(`${response.data.message} \n Please note your Order Number ${response.data.orderNumber}`)
clearCart()
setFormData({
name:"",
email:"",
whatsapp:"",
address:"",
})
}

catch(error){
console.log(error)
alert(error?.response?.data?.message || "something went wrong")
}











}

  return (
    <div>
    <Hero1 />
    <div className="hero31">
        <form onSubmit={submit}>
        <div className="hero31-inp">
            <input value={formData.name} onChange={getInp} placeholder="Enter Name" type="text" name="name" id="" />
            {errors.name && <p className="errors">{errors.name}</p>}
        </div>
        <div className="hero31-inp">
            <input value={formData.email} onChange={getInp} placeholder="Enter Email" type="text" name="email" id="" />
            {errors.email && <p className="errors">{errors.email}</p>}
        </div>
        <div className="hero31-inp">
            <input value={formData.whatsapp} onChange={getInp} placeholder="Enter Whatsapp Number" type="text" name="whatsapp" id="" />
            {errors.whatsapp && <p className="errors">{errors.whatsapp}</p>}
        </div>
        <div className="hero31-inp">
            <input value={formData.address} onChange={getInp} placeholder="Enter Delivery Address" type="text" name="address" id="" />
            {errors.address && <p className="errors">{errors.address}</p>}
        </div>

        <div className="hero31-btn">
            <button>Place Order</button>
        </div>

        
        </form>
    </div>
    </div>
  )
}

export default Hero31
