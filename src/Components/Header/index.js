import { useNavigate } from 'react-router-dom';
import context from "../../context/context";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Cookies from 'js-cookie';
import { IoSearch } from "react-icons/io5";
import "./index.css"

const Header  = () =>{
    const navigate = useNavigate()
    return(
        <context.Consumer>
            {value=>{

                const logOutFnc =()=>{
                    Cookies.remove('jwt_token');
                    navigate('/login', { replace: true });
                }

                return(
                    <nav className="navContainer">
                        <div className="logo">
                            <h1 className="headlogo">Grocery<span className="sp1"> Store</span></h1>
                        </div>
                        <div className="form-box">
                            <input type="search" placeholder="Search for items..." className="search-box"/>
                            <button type="button"  className="btn-search"><IoSearch className='icc'/>
                            </button>
                        </div>
                        <div className="logo">
                        <li className="navItems">Home</li>
                        <li className="navItems">Cart</li>
                        <div>
                            <Popup
                                modal
                                className="popup"
                                trigger={
                                <button type="button" className="btn-logout" >
                                    LogOut  
                                </button>
                                }
                            >
                                {close => (
                                    <div className="close-box">
                                        <h1 className="logHead">Are you sure, you want to logout?</h1>
                                        <div className="flex1">
                                            <button
                                            type="button"
                                            className="trigger-button btn btn-no"
                                            onClick={() => close()}
                                            >
                                            Cancle
                                            </button>
                                            <button
                                            type="button"
                                            className="trigger-button btn btn-yes"
                                            onClick={logOutFnc}
                                            >
                                            Confirm
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                        
                        </div>
                    </nav>
                )
            }}
        </context.Consumer>
    )
}

export default Header