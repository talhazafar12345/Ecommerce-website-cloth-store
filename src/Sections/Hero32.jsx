





import Hero1 from "./Hero1"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Hero32() {

const navigate = useNavigate()
const[errors,setErrors] = useState({})
const[show,setShow] = useState(false)
const[form,setForm] = useState({
email:"",
password:"",
})

const change=()=>{
setShow(!show)
}

const getInp=(e)=>{
const {name,value} = e.target
setForm({...form,[name]:value})
setErrors({...errors,[name]:""})
}

const validate=()=>{
const newErrors = {}
if(!form.email){
newErrors.email = "Please enter email"
}

else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
newErrors.email = "Please enter valid email"
}


if(!form.password){
newErrors.password = "Please enter password"
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

try{
const response = await axios.post("http://localhost:5000/admin-Data",{form})
console.log(response)
alert(response.data.message)
setForm({
email:"",
password:"",
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
                <input value={form.email} onChange={getInp} placeholder="Enter your email" type="text" name="email" id="" />
                {errors.email && <p className="errors">{errors.email}</p>}
            </div>

            <div className="hero31-inp">
                <input value={form.password} onChange={getInp} placeholder="Enter your Password" type={show ? "text" : "password"} name="password" id="" />
                <span onClick={change} className="change">{show ? "👁️": "👁️" }</span>
                {errors.password && <p className="errors">{errors.password}</p>}
            </div>

                
                <div className="hero14-link">
                    <span className="forget" onClick={()=>navigate("/forget-page",{
                    state:{email:form.email}
                    })}>Forget Password</span>
                </div>


         

            <div className="hero31-btn">
                <button>Submit</button>
            </div>



                </form>
            </div>

        </div>
    )
}

export default Hero32
