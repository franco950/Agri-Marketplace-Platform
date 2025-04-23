import { Link } from 'react-router-dom';

import Navbar from './Navbar';
function Homepage(){
    return (<>
    <div className='hero'>
    <div className='glass-card'>
    <Navbar/>
    <div className="hero-content">
        <h1>Direct from Farmers<br/> to You</h1>
        <p>
          Source fresh produce and grains directly from local farms.<br />
          Connecting buyers and farmers for fair, transparent trade.
        </p>
        <a href="#" className="explore-btn">Explore Marketplace</a>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search products" />
        <select>
        <option  disabled selected>Category</option>
          
          <option>Category</option>
        </select>
        <select>
        <option disabled selected>Location</option>
          <option>Location</option>
        </select>
        <button className="search-btn">Search</button>
      </div></div></div></>)
}
export default Homepage