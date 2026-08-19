





import Hero1 from "./Hero1"
import { useState,useEffect } from "react"
import axios from "axios"
function Hero37() {
const[image,setImage] = useState(null)
const[name,setName]= useState("")
const[category,setCategory] = useState("")
const[categories,setCategories] = useState([])
const[products,setProducts] = useState([])
const addProducts= async()=>{
try{
const selectedCategory = categories.find((item)=>item._id === category)
if(!selectedCategory){
alert("Please select Category")
return
}
const formData =  new FormData()
formData.append("image",image)
const imageResponse = await axios.post("http://localhost:5000/upload",formData)
const product={
image:imageResponse.data.image[0],
name:name,
categoryId:category,
category:selectedCategory.category,
status:"Active",
}
const response = await axios.post("http://localhost:5000/products",{product})
console.log(response)
setProducts([...products,product])
alert(response.data.message)
setName("")
setImage(null)
getProducts()
}
catch(error){
  console.log(error)
  alert(error?.response?.data?.message || "something went wrong")
}
}



const changeStatus=async(index)=>{
try{
const item= [...products]
const newStatus = item[index].status === "Active" ? "Inactive" :"Active"
const response = await axios.put(`http://localhost:5000/status/${item[index]._id}`,{
status:newStatus
})
item[index].status = newStatus
console.log(response)
setProducts(item)
alert(response.data.message)
}

catch(error){
console.log(error)
alert(error?.response?.data?.message || "something went wrong")
}
}

const edit=async(index)=>{
try{
const item = products[index]
const newName = prompt("Enter updated name ",item.name)
const newImage =prompt("Enter updated image", item.image)
const response = await axios.put(`http://localhost:5000/pro/${item._id}`,{
name:newName,
image:newImage,
})
const copy =[...products]
if(newName !== "" &&  newName !==null){
copy[index].name = newName
}
if(newImage !=="" && newImage !== null){
copy[index].image = newImage
}
setProducts(copy)
alert(response.data.message)
}

catch(error){
console.log(error)
alert(errror?.response?.data?.message || "Something went wrong")
}

}

const remove=async(index)=>{
try{

const item=products[index]
const del = products.filter((_,i)=> i !==index)
const response = await axios.delete(`http://localhost:5000/products/delete/${item._id}`)
console.log(response)
setProducts(del)
alert(response.data.message)
}

catch(error){
console.log(error)
alert(error?.response?.data?.message || "something went wrongf")
}
}


const getProducts= async()=>{
try{
const response = await axios.get("http://localhost:5000/products/all")
console.log(response)
setProducts(response.data.data)
}
catch(error){
console.log(error)
alert(error?.response?.data?.message)
}
}

useEffect(()=>{
getProducts()
getCategories()
},[])


const getCategories= async()=>{
try{
const response = await axios.get("http://localhost:5000/categories/all")
console.log(response)
setCategories(response.data.data)
}

catch(error){
console.log(error)
}
}



  return (
    <div>

      <div className="hero35-category">
        <h1>Product Management</h1>
      </div>

      <div className="category-top">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name" type="text" name="" id="" />
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="" />
        <button onClick={addProducts} className="add-btn">Add</button>
      </div>

      <div className="hero-19">

      <select value={category} onChange={(e)=>setCategory(e.target.value)}>

           <option>
            Select Category
           </option>

           {
            categories.map((item,index)=>(
              <option key={item._id} value={item._id}>
                {item.category}
              </option>
            ))
           }
      </select>
      </div>

      <div className="category-table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
            products.map((item,index)=>(

              <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td><img src={item.image} width="100px" alt="" /></td>
                <td>
                  <span className={item.status ==="Active" ? "status-active" :"status-inactive"}>{item.status}</span>
                </td>

                <td>
                  <button onClick={()=>changeStatus(index)} className="status-btn">{item.status === "Active" ? "Active" : "Inactive"}</button>
                  <button className="edit-btn" onClick={()=>edit(index)}>Edit</button>
                  <button className="del-btn" onClick={()=>remove(index)}>Remove</button>
                </td>

              </tr>
            ))
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Hero37
