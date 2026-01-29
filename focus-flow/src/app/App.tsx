import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import './App.css'
import { Routes, Route, Link, Links } from 'react-router-dom'

function App() {
  return (
    // <Links>
    //   <Link></Link>
    // </Links>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  )
}

export default App
