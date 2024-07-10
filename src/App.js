
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import './index.css'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { useState } from 'react'

function App() {
  const [id,setid] = useState([
    {
        id:"farees",
        password:'123'
    }
])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login id={id} setid={setid} />}></Route>
        <Route path='/signup' element={<Signup id={id} setid={setid} />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
