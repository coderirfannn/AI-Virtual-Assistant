import React from 'react';
import bg from '../assets/bg.webp';

function SignIn() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition duration-200 font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
