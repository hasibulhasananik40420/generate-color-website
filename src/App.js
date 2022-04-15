import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Componenets/Auth/Login/Login';
import RequireAuth from './Componenets/Auth/RequireAuth/RequireAuth';
import Singup from './Componenets/Auth/Singup/Singup';
import Contact from './Componenets/Contact/Contact';
import Docks from './Componenets/Docks/Docks';
import Generator from './Componenets/Generator/Generator';
import Home from './Componenets/Home/Home/Home';
import Nav from './Componenets/Nav/Nav';

function App() {
  return (
    <div>
    <Nav></Nav>
     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/generator' element={<RequireAuth> <Generator> </Generator> </RequireAuth> }></Route>
        <Route path='/docs' element={<Docks></Docks>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/singup' element={<Singup></Singup>}></Route>
     </Routes>

    </div>
  );
}

export default App;
