import  { BrowerRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';




export default function App() {
  return
    <BrowerRouter>
     <Routes>
        <Route path="/" element={<Home/>}   />
        <Route path="/sign-in" element={<About/>}   />
        <Route path="/sign-up" element={<SignUp/>}   />
        <Route path="/profile" element={<SignIn/>}   />
        <Route path="/about" element={<Profile/>}   />
        
        
     </Routes>
    </BrowerRouter>;
  
}

