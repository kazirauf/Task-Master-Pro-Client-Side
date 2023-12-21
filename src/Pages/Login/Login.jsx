import { Link } from "react-router-dom";

const Login = () => {
    const {signIn, signInWithProvider} = useAuth()
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
          })
          .catch(error => {
            console.error(error)
            toast.error(error.message,{
              position: "top-center"
            })
            
          })
          
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
          className="w-full mt-4 py-3 px-4 rounded-full bg-gradient-to-r from-orange-300 to-orange-600 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Login
        </button>
      
        <p className="mt-4 text-center">
               You have not an account. Please <Link className="text-orange-400 font-bold" to="/register">register</Link> now
        </p>
      </form>
    </div>
  </div>
        </div>
    );
};

export default Login;