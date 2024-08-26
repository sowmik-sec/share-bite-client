import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully"))
      .then((err) => {
        console.log(err);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to={"/available-foods"}>Available Foods</Link>
      </li>
      <li>
        <Link to={"/add-food"}>Add Food</Link>
      </li>
      <li>
        <Link to={"/manage-my-food"}>Manage My Foods</Link>
      </li>
      <li>
        <Link to={"/my-claimed-foods"}>My Claimed Foods</Link>
      </li>
      <li>
        <Link to={"request-food"}>Request Food</Link>
      </li>
      <li>
        <Link to={"requested-foods"}>Requested Foods</Link>
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {/* <img src={logo} alt="" /> */}
          <p>Bite Share</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            <img
              src={user.photoURL}
              title={user.displayName}
              className="w-14 h-14 rounded-full mr-3"
              alt=""
            />
            <button className="mr-3" onClick={handleLogOut}>
              Log out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
