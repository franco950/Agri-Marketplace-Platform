import { Link } from "react-router-dom";
import { useAuth } from "./context/useauth";
import { useCartContext } from "./cart";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let { isLoggedin, logout } = useAuth();
  const { total } = useCartContext();
  const navigate=useNavigate()
  const all=1

  return (
    <nav className="navbar">
      <div className="logo">AgriGo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      
      {isLoggedin ? (
        <>
        <div>
        {total}
        <button className="cart-logo" onClick={()=>navigate(`/order/${all}`)}></button></div>
        <Link to="/profile">profile</Link>
        <Link to='/tracking/1'>my Orders</Link>
        <button onClick={logout}>Logout</button></>
        
      ) : (
        <li className="sign-in"><Link to="/login">Sign in</Link></li>
        
      )}</ul>
    </nav>
  );
}
