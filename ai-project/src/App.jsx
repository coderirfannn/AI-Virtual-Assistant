import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Add more routes as needed */}
      </Routes>
  
  );
}

export default App;
