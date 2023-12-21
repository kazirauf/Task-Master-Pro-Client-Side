import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser} = useAuth()
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
             
             })
             .catch(error => {
               console.error(error)
              
             })
       }
    return (
        <div>
      <div>
      <div  className="min-h-screen flex items-center justify-center bg-orange-100">
    <div className="bg-white w-96 p-8 rounded-lg shadow-lg py-10">
      <h1 className="text-center text-orange-700 font-semibold text-2xl">Register</h1>
      <form onSubmit={handleRegister} className="mt-6">
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
      
        <p className="mt-4 text-center">
               You have already an account. Please <Link className="text-orange-400 font-bold" to="/login">Login</Link> now
        </p>
      </form>
    </div>
  </div>
        </div>

      </div>
    );
};

export default Register;