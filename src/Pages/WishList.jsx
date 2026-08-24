import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"




import { cartContext } from "../Sections/Hero30"
import { useContext } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



function WishList() {

const navigate= useNavigate()

const change=(item)=>{
navigate(`/detail/${item.cartId}`)

}

useEffect(()=>{
window.scrollTo(0,0)
},[])

const {wishList,mitana} = useContext(cartContext)
  return (
    <div>

    <Hero1 />


    <div className="cart-container">

    {
    wishList.length === 0  ? (
    <h2><i className="fa-solid fa-heart add"></i> Your wishlist is empty</h2>
    ) :(

     <div className="table-wrappers">

    <table className="cart-table">
        <thead>
            <tr>
                <th>S.NO</th>
                <th>Product Image</th>
                <th>Price</th>
                <th>Action</th>
                <th>Button</th>
            </tr>
        </thead>


        <tbody>
            {
            wishList.map((item,index)=>(

           <tr>
             <td className="newPrice">{index+1}</td>
             <td><img className="item-image" src={item.image} width="100px" alt="" /></td>
             <td className="newPrice">$ {item.newPrice}</td>
             <td><button className="del-btn" onClick={()=>mitana(item.cartId)}>Remove</button></td>
             <td><button onClick={()=>change(item)}>View</button></td>
           </tr>
            ))
            }
        </tbody>
    </table>

     </div>

    )
    }
    </div>

    <Footer />
    </div>
  )
}

export default WishList