
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Notification from './components/Notification';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='app-navbar'><Navbar/></div>
      <div className='app-nav-content'> 
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path= '*' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
