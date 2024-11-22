import { Route, Routes } from 'react-router-dom'
import './App.css'
import Detail from './pages/Detail'
import Home from './pages/Home'

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        
        
        {/* dynamic routing :  id will be changed based on the pdt*/}
        <Route path='/:id/view' element={<Detail/>} />
        
      </Routes>
    </>
  )
}

export default App
