import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Login from './Components/Form/Login';
import UseState from './Components/usestate/UseState';
import Register from './Components/Form/Register';
import ChildComponent from './Components/childComponent/ChildComponent';
import Mapping from './Components/mapping and all products/Mapping';
import AllProducts from './Components/mapping and all products/AllProducts';
import Usereducer from './Components/usereducer/Usereducer';
import Todo from './Components/Todo/Todo'
import Memo from './Components/usecallback/Memo';
import UseMemo from './Components/usecallback/UseMemo';
import State from './Components/Test/State';
import Effect from './Components/Test/Effect';
import Product from './Components/Test/Product';
import Regis from './Components/Test/Regis';
import Log from './Components/Test/Log';
import State1 from './Components/usestate/State1';
import Todo1 from './Components/Todo/Todo1';


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
      <Route path="/mapping" element={<Mapping students={["Virat", "Rohit", "Dhoni"]} />}></Route>
      <Route path="/all-products" element={<AllProducts  />}></Route> 
      <Route path="/reducer" element={<Usereducer/>}></Route> 
      <Route path="/todo" element={<Todo />}></Route> 
      <Route path="/memo" element={<Memo />}></Route> 
      <Route path="/use-memo" element={<UseMemo />}></Route> 
      <Route path="/useState" element={<State />}></Route> 
      <Route path="/effect" element={<Effect />}></Route> 
      <Route path="/product" element={<Product />}></Route> 
      <Route path="/regis" element={<Regis />}></Route> 
      <Route path="/log" element={<Log />}></Route> 
      <Route path="/state" element={<State1 />}></Route> 
      <Route path="/to-do" element={<Todo1 />}></Route> 
      {/* <Route path="/useContext" element={<UseContext/>}></Route>  */}
     </Routes>
    </div>
  );
}

export default App;
