import { useContext, useState } from 'react';
import bg from '../assets/bg.webp';
import { userdataContext } from '../context/userContext.jsx';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { serverUrl } = useContext(userdataContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);
    
    try {
      const result = await axios.post(`${serverUrl}/signup`, formData, {
        withCredentials: true,
      });

      setSuccess('Account created successfully! You can now log in.');
      setFormData({ name: '', email: '', password: '' }); // Clear form on success
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{ 
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join our community today</p>
        </header>

        <form className="space-y-6" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
              minLength="6"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
            <p className="mt-1 text-xs text-gray-500">Minimum 6 characters</p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="p-3 bg-green-50 text-green-600 text-sm rounded-lg text-center">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Already have an account?{' '}
            <a href="/signin" className="font-medium text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;