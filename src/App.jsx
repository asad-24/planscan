import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import LandingPage from './components/LandingPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
 
} from "react-router-dom";
import RequestDemo from './components/requestDemo/RequestDemo';

function App() {
 

  return (
    <BrowserRouter>
 
  <Routes>
    <Route path="/"  element={<LandingPage/>}/> 
    <Route path="/request"  element={<RequestDemo/>}/> 

  </Routes>


 
 </BrowserRouter>
  )
}

export default App
