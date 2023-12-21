import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const {signIn,  signInWithProvider} = useAuth()
    const navigate = useNavigate()
    const handleLogin = e => {
      e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password)
  
         
  
          signIn(email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
            if(user){
              return toast.success('you logged in Successfully.',{
                position: "top-center"
              })
            }
            navigate("/dashboard")
          })
          .catch(error => {
            console.error(error)
            toast.error(error.message,{
              position: "top-center"
            })
            
          })
          
    }

    const handleGoogleLogin = () => {
         signInWithProvider()
         .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                return toast.success('you logged in Successfully.',{
                  position: "top-center"
                })
              }
            navigate("/dashboard")
         })
         .catch(error => console.error(error.message))
    }
      
    return (
        <div>
                 <div  className="min-h-screen flex items-center justify-center bg-orange-100">
    <div className="bg-white w-96 p-8 rounded-lg shadow-lg py-10">
      <h1 className="text-center text-orange-700 font-semibold text-2xl">Login</h1>
      <form onSubmit={handleLogin} className="mt-6">
      <div className="py-3">
          <h1 className="font-bold mb-2 ml-1 text-orange-700">Email</h1>
       <input
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-orange-400 focus:bg-white"
          type="email"
          name="email"
          placeholder="your email address"
          required
        />
       </div>
      <div className="py-3">
          <h1 className="font-bold mb-2 ml-1 text-orange-700">Password</h1>
       <input
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-orange-400 focus:bg-white"
          type="password"
          placeholder="your password"
          name="password"
          required
        />
       </div>
        <button
          className="w-full mt-4 py-3 px-4 rounded-full bg-gradient-to-r from-orange-300 to-orange-600 text-white text-center font-semibold text-"
        >
          Login
        </button>
      
      </form>
      <button 
         onClick={handleGoogleLogin}
          className="w-full mt-4 py-1 justify-center flex  border border-gray-600 rounded-full"
        >
<div className="flex items-center gap-x-5">
<h3 className="text-lg font-bold">Continue to </h3>
        <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" />
</div>
        
        </button>
      
        <p className="mt-4 text-center">
               You have not an account. Please <Link className="text-orange-400 font-bold" to="/register">register</Link> now
        </p>
    </div>
  </div>
        </div>
    );
};

export default Login;