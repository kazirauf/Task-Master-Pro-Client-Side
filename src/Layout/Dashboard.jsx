import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
                 <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center bg-orange-100">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet ></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul  className="menu p-4 w-80 min-h-full border-4 border-orange-400 text-base-content">
 
     
      <li><Link className="py-2.5 px-5 rounded-md font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-black mb-5"  to="surveyStatus">Survey Status</Link></li>
      <li><Link className="py-2.5 px-5 rounded-md font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-black mb-5"  to="users">Users</Link></li>
      <li><Link className="py-2.5 px-5 rounded-md font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-black mb-5"  to="usersPayment">User Payments</Link></li>
      <hr />
      <li><Link className="py-2.5 px-5 rounded-md font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-black mb-5 mt-5"  to="/">Back To Home</Link></li>
  

    
 
    </ul>
  
  </div>
</div>
            
        </div>
        </div>
    );
};

export default Dashboard;