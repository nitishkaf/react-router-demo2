import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink> </li>
        <li>
          <Link to="/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/comments">
            Comments
          </Link>
        </li>
        <li>
          <Link to="/todos">
            Todos
          </Link>
        </li>
        <li>
          <Link to="/users">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
