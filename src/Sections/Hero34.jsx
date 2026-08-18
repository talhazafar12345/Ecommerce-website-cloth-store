

import {
  FaTachometerAlt,
  FaUsers,
  FaShoppingCart,
  FaBoxOpen,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaTh,
} from "react-icons/fa";
import { Link } from "react-router-dom";




function Hero34() {
  return (
    <div>




     <div>
      <aside className="admin-sidebar">

        <div className="admin-top">

          <div className="admin-brand">
            <div className="admin-logo">

            </div>

            <div className="admin-title">
              <h2>AdminPro</h2>
              <p>Dashboard</p>
            </div>
          </div>


          <ul className="admin-menu">

            <li className="admin-menu-link active-link">
              <FaTachometerAlt />
              <Link  className="cat">Dashboard</Link>

            </li>

            
            <li className="admin-menu-link">
              <FaTh />
              <Link to={"/category-management-page"}  className="cat">Categories</Link>
            </li>

            
            <li className="admin-menu-link">
              <FaBoxOpen />
              <Link to={"/product-management-page"} className="cat">Products</Link>
            </li>

            
            <li className="admin-menu-link">
              <FaShoppingCart />
              <span>Orders</span>
            </li>


            <li className="admin-menu-link">
              <FaUsers />
              <span>Users</span>
            </li>

            <li className="admin-menu-link">
              <FaChartLine />
              <span>Analytics</span>
            </li>

            <li className="admin-menu-link">
              <FaCog />
              <span>Settings</span>
            </li>

          </ul>

        </div>

        <div>

        </div>
        <button className="admin-logout">
          Logout
        </button>


      </aside>
    </div>




    
      
    </div>
  )
}

export default Hero34
