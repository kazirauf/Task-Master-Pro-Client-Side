import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser, signInWithProvider} = useAuth()
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault();
             const form = new FormData(e.currentTarget)
             const image = form.get('image')
             const name = form.get('name')
             const email = form.get('email')
             const password = form.get('password')
             console.log(name, email, password)
     
           // eslint-disable-next-line no-useless-escape
           const specialCharactersRegex = /[!@#\$%\^\&*\)\(+=._-]/g;

           if (password.length < 6) {
               toast.error('Password should be at least 6 characters or longer',{
                position: "top-center"
               });
               return;
           }
      
           else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters.',{
                position: "top-center"
               })
               return;
           }
           else if (!specialCharactersRegex.test(password)) {
            toast.error("Your password must have a special character",{
                position: "top-center"
               });
             return;
           }
           
           
           
             createUser(email, password)
             .then(result => {
               const user = result.user;
               console.log(user);
               navigate("/")
             updateProfile(result.user, {
                 displayName: name, 
                 photoURL: image
             })
             .then( () => console.log('profile updated'))
             .catch()
               if(user){
                 return toast.success('create the user account is Successfully done.',{
                    position: "top-center"
                   })
               }
               navigate("/dashboard")
             
             })
             .catch(error => {
               console.error(error)
              
             })
       }

       const handleGoogleLogin = () => {
        signInWithProvider()
        .then(result => {
           const user = result.user;
           console.log(user);
           if(user){
            return toast.success('create the user account is Successfully done.',{
               position: "top-center"
              })
          }
           navigate("/dashboard")
        })
        .catch(error => console.error(error.message))
   }
     
    return (
        <div>
      <div>
      <div  className="min-h-screen flex items-center justify-center bg-orange-100">
    <div className="bg-white w-96 p-8 rounded-lg shadow-lg py-10">
      <h1 className="text-center text-orange-700 font-semibold text-2xl">Register</h1>
      <form onSubmit={handleRegister} className="mt-6">
      <div className="py-3">
          <h1 className="font-bold mb-2 ml-1 text-orange-700">Image</h1>
       <input
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-orange-400 focus:bg-white"
          type="text"
          name="image"
          placeholder="your image url"
          required
        />
       </div>
      <div className="py-3">
          <h1 className="font-bold mb-2 ml-1 text-orange-700">Name</h1>
       <input
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-orange-400 focus:bg-white"
          type="text"
          name="name"
          placeholder="your name"
          required
        />
       </div>
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
               You have already an account. Please <Link className="text-orange-400 font-bold" to="/login">Login</Link> now
        </p>
    </div>
  </div>
        </div>

      </div>
    );
};

export default Register;