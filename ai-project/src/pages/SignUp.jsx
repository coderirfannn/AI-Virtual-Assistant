import { useContext, useState } from 'react';
import bg from '../assets/bg.webp';
import { userdataContext } from '../context/userContext.jsx';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {serverUrl} = useContext(userdataContext)

  const handelSignUpPage = async(e)=>{
     e.preventDefault();
    try {

      let result = axios.post(`${serverUrl}/signup` ,formData ,{withCredentials:true})
      console.log(result.data);
      
      
    } catch (error) {
      console.log(error);
      
    }

  }



  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>
        
        <form className="space-y-5" onSubmit={handelSignUpPage}>
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition duration-200 font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
