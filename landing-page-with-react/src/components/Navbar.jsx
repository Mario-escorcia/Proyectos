import './navbar.css'
import {MdAirplanemodeActive} from 'react-icons/md'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        <MdAirplanemodeActive fontSize={"30px"} />
        <h3>TravelMind</h3>
      </div>

      <div className="options--nav">
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Hire</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar