import './App.css'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './Home';
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
        </Routes>
      </BrowserRouter>
     
      
    </>
  )
}

export default App
