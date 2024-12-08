
import './App.css';
import {Route,Routes} from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Book from './components/Book';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Js from './components/js';
import SignIn from './components/Signin';
import SignUp from './components/Signup';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      {/* <Home/>
      <Menu/>
      <About/>
      <Book/> */}
  
      <Routes>
      <Route path='/js' element={<Js/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
     
   
        
   



      </div>
  );
}

export default App;
