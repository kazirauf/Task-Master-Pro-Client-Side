import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // eslint-disable-next-line react/prop-types
    const CustomNavLink = ({ to, children }) => (
        <li className="text-slate-900 text-lg font-bold">
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "white" : "",
              color: isActive ? "#eb6a2a" : "",
            })}
            to={to}
          >
            {children}
          </NavLink>
        </li>
      );
      
      const links = (
        <>
          <CustomNavLink to="/">Home</CustomNavLink>
       
        </>
      );
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
   <img className="w-10" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/task-management-2076432-1756223.png" alt="" />
   <h3 className="text-xl ml-2">Task Master Pro</h3>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="py-2 px-5 text-white bg-orange-500 font-bold rounded">Login</Link>
    <Link to="/register" className="py-2 px-5 text-white bg-orange-500 font-bold rounded ml-3">Register</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;