import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Componenets/Auth/Login/Login';
import RequireAuth from './Componenets/Auth/RequireAuth/RequireAuth';
import Generator from './Componenets/Generator/Generator';
import Home from './Componenets/Home/Home/Home';
import Nav from './Componenets/Nav/Nav';

function App() {
  return (
    <div>
    <Nav></Nav>
     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/generator' element={
       <RequireAuth>
          <Generator></Generator>
       </RequireAuth>
       }></Route>
       <Route path='/login' element={<Login></Login>}></Route>


     </Routes>

    </div>
  );
}

export default App;
