





import Hero1 from "./Hero1"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"


function Hero33() {

const location = useLocation()

const email = location.state?.email

const[errors,setErrors] = useState({})
const [password,setPassword] = useState({
newPassword:"",
confirmPassword:"",
})

const validate=()=>{
const newErrors={}
if(!password.newPassword){
newErrors.newPassword = "Please enter new password"
}
if(!password.confirmPassword){
newErrors.confirmPassword = "Please enter confirm new password"
}
return newErrors
}
const getInp=(e)=>{
const {name,value} = e.target
setPassword({...password,[name]:value})
}


const submit=async(e)=>{
e.preventDefault()
const validation = validate()
if(Object.keys(validation).length > 0){
setErrors(validation)
return
}

try{
const response = await axios.post("http://localhost:5000/change-password",{
email:email,
newPassword:password.newPassword,
confirmPassword:password.confirmPassword,
})
console.log(response)
alert(response.data.message)
setPassword({
newPassword:"",
confirmPassword:"",
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
        <input value={password.newPassword} onChange={getInp} placeholder="Enter new password" type="text" name="newPassword" id="" />
        {errors.newPassword && <p className="errors">{errors.newPassword}</p>}
       </div>

       <div className="hero31-inp">
        <input value={password.confirmPassword} onChange={getInp} placeholder="Enter confirm new password" type="text" name="confirmPassword" id="" />
        {errors.confirmPassword && <p className="errors">{errors.confirmPassword}</p>}
       </div>

       <div className="hero31-btn">
        <button>Change</button>
       </div>






        </form>
    </div>













      
    </div>
  )
}

export default Hero33
