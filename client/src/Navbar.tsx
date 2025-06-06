import { useAuth } from "./context/useauth";
import { useCartContext } from "./cart";
import { useNavigate, Link} from "react-router-dom";

export default function Navbar() {
  let { isLoggedin, logout ,username, userRole} = useAuth();
  const { total } = useCartContext();
  const navigate=useNavigate()
  return (
    <nav className="navbar">
      <li className="logo">AgriGo</li>
      
      <ul className="nav-links">
        <li>{username}: {userRole&& userRole}</li>
        <li><Link to="/">Home</Link></li>
      
       
      {(userRole=='farmer')?(
        <li><Link to="/product/farmer?farmerid=1">my products</Link></li>
        
      ):('')}
      {isLoggedin ? (
        <>
        {userRole!=='farmer'&&<li><button className="cart-logo" onClick={()=>navigate(`/order/1`)}>{total}</button></li>}
        <li><Link to="/profile">profile</Link></li>
        <Link to='/tracking/1'>My Orders</Link>
        <li><button onClick={logout}>Logout</button></li></>
        
      ) : (
        <li className="sign-in"><Link to="/login">Login</Link></li>
        
      )}</ul>
    </nav>
  );
}
