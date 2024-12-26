import { IoSearchSharp } from "react-icons/io5";
import context from "../../context/context"
import "./index.css"

const Header  = () =>(
    <context.Consumer>
        {value=>{
            const {cartList} = value

            return(
                <nav className="navContainer">
                    <div className="logo">
                         <h1 className="headlogo">Grocery<span className="sp1"> Store</span></h1>
                    </div>
                    <div className="form-box">
                        <input type="search" placeholder="Search for items..." className="search-box"/>
                        <button type="button" className="btn-search"><IoSearchSharp className="ic"/></button>
                    </div>
                    <div className="logo">
                    <li className="navItems">Home</li>
                    <li className="navItems">Cart</li>
                    <button type="button" className="btn-logout">
                        LogOut  
                    </button>
                    </div>
                </nav>
            )
        }}
    </context.Consumer>
)

export default Header