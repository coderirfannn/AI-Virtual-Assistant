import React from 'react';
import bg from '../assets/bg.webp';

function SignIn() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your account</p>
        </header>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don't have an account?{' '}
            <a href="/" className="font-medium text-blue-600 hover:underline">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;