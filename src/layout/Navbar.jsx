import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <ul>
          <li><NavLink to="/activities">Activities</NavLink></li>
        {token ? (
          <li onClick={() => logout()}>Log out</li>
        ) : (
          <>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </>
        )}
        </ul>
      </nav>
    </header>
  );
}
