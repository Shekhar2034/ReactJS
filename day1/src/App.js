import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Login from './Components/Form/Login';
import UseState from './Components/usestate/UseState';
import Register from './Components/Form/Register';
import ChildComponent from './Components/childComponent/ChildComponent';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/use-state" element={<UseState/>}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/child-component" element={<ChildComponent />}></Route>
     </Routes>
    </div>
  );
}

export default App;
