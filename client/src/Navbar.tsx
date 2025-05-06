import { Link } from "react-router-dom";
import { useAuth } from "./context/useauth";

export default function Navbar() {
  const { isLoggedin, logout } = useAuth();
 

  return (
    <nav className="navbar">
      <div className="logo">AgriGo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      
      {isLoggedin ? (
        <>
        <Link to="/profile">profile</Link>
        <button onClick={logout}>Logout</button></>
        
        
      ) : (
        <li className="sign-in"><Link to="/login">Sign in</Link></li>
        
      )}</ul>
    </nav>
  );
}
