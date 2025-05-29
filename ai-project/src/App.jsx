import React from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App ()  {
  return (
    <Routes>
      <Route path='/signup' elements={<SignUp/>}/>
      <Route path='/signin' elements={<SignIn/>}/>

      {/* Add more routes as needed */}
    </Routes>
  )
}

export default App