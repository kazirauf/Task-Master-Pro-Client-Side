import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Banner = () => {
    const {user} = useAuth()
    return (
        <div>
            <div className="hero min-h-[800px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md lg:max-w-sm">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Task Master Pro</h1>
      {
        user ?
        <Link className="btn bg-orange-500 font-bold text-white border-0">Let’s Explore</Link>
        :
        <Link to="/login" className="btn bg-orange-500 font-bold text-white border-0">Let’s Explore</Link>
      }
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;