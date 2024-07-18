import './App.css';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
import Signin from './components/Signin';
// import Skills from './components/Skills'
import Login from './components/Login'
import {BrowserRouter,Route,Routes }from "react-router-dom"
import Student from './components/Student';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
        {/* <Header/>
        <Hero />
        <About/>
        <Projects/>
        <Skills />
        <Contact/>
        <Footer/> */}
       <BrowserRouter>
       <Routes>
    <Route path='/register' element={<Signin />}></Route>
    <Route path='/login' element={<Login />}></Route>
    {/* <Route path='/home' element={<Home />}></Route>
    <Route path='/stuform' element={<Student />}></Route> */}
    <Route path='/student' element={<Student />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
    </Routes>

       </BrowserRouter>

    </div>
  );
}

export default App;
