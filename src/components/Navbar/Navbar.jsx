
import './index.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
       
        <li>
          <a href="#topS">TOP RATED</a>
        </li>
        <li>
          <a href="/">FAVORITE</a>
        </li>
        <li>
          <a href="#topM">UP COMING</a>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar;