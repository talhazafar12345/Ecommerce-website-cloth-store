




import { useEffect, useState } from "react"
import axios from "axios"
function Hero35() {
const[category,setCategory] = useState("")
const[list,setList] = useState([])
const[image,setImage] = useState(null)

useEffect(()=>{
getCategories()
},[])

const addCategory=async()=>{
if(!category){
return
}
try{

const formData = new FormData()
formData.append("image",image)
const imageResponse = await axios.post("http://localhost:5000/upload", formData)


const newCategory={
category:category,
image:imageResponse.data.image[0],
status:"Active",
}

const response = await axios.post("http://localhost:5000/categories",{newCategory})
console.log(response)
alert(response.data.message)
setList([...list,newCategory])
setCategory("")
getCategories()
}

catch(error){
console.log(error)
alert(error?.response?.data?.message || "something went wrong")
}
}


const getCategories=async()=>{
try{
const response = await axios.get("http://localhost:5000/categories/all")
console.log(response)
setList(response.data.data)
}
catch(error){
console.log(error)
}
}

const changeStatus=async(index)=>{

  try{
const item = list[index]
const newStatus= item.status === "Active" ? "Inactive" : "Active"
const response = await axios.put(`http://localhost:5000/categories/${item._id}`,{
status:newStatus
})
console.log(response)
const replace = [...list]
replace[index].status = newStatus
setList(replace)
alert(response.data.message)

  }
  catch(error){
  console.log(error)
  alert(error?.response?.data?.message)
  }
}
const edit=async(index)=>{

try{
const item = [...list]
const text = prompt("Enter updated value",item[index].category)
if(text =="" || text == null){
return
}
const text1=prompt("Enter updated image",item[index].image)
if(text1 == "" || text1 == null){
return
}
const response = await axios.put(`http://localhost:5000/categor/${item[index]._id}`,{
category:text,
image:text1
})
item[index].category = text
item[index].image = text1
setList(item)
alert(response.data.message)
}

catch(error){
console.log(error)
alert(error?.response?.data?.message)
}

}

const remove= async(index)=>{

try{
const item = [...list]
const del = item.filter((_,i)=> i !==index )
const response = await axios.delete(`http://localhost:5000/cate/${item[index]._id}`)
console.log(response)
setList(del)
alert(response.data.message)
}
catch(error){
console.log(error)
alert(error?.response?.data?.message)
}
}

  return (
    <div>
    <div className="hero35-category">
      <h1>Category Management</h1>
    </div>
    <div className="category-top">
      <input placeholder="Enter Category" value={category} onChange={(e)=>setCategory(e.target.value)} type="text" name="" id="" />
      <input className="inp" placeholder="Enter Image" onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="" />
      <button onClick={addCategory} className="add-btn">Add</button>
    </div>

    <div className="category-top">
      <input placeholder="Enter Price" type="text" name="" id="" />
    </div>

    <div className="category-table">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Category Name</th>
            <th>Category Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          list.map((item,index)=>(


             <tr key={index}>
              <td>{index+1}</td>
              <td>{item.category}</td>
              <td><img src={item.image} width="100px" alt="" /></td>
              <td>
                <span className={item.status ==="Active" ?"status-active":"status-inactive"}>{item.status}</span>
              </td>

              <td>
                <button onClick={()=>changeStatus(index)} className="status-btn">{item.status==="Active" ? "Active" : "Inactive"}</button>
                <button onClick={()=>edit(index)} className="edit-btn">Edit</button>
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
export default Hero35
