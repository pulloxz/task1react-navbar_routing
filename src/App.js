import HomePage from './components/homePage';
import Navbar  from './navBar';
import Contactus from './components/contactus';
import Shop from './components/shop';
import Services from './components/services';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Results from './components/results';


function App() {
  return (
    <div className="App">
      
       
        <Router>
          <Navbar/>
          <Routes>
          <Route path='/' exact element={<HomePage/>}></Route>
          <Route path='/services'  element={<Services/>}></Route>
          <Route path='/results'  element={<Results/>}></Route>
          <Route path='/shop'  element={<Shop/>}></Route>
          <Route path='/contactus'  element={<Contactus/>}></Route>

          



        </Routes>
        </Router>
        
        
          
        
        
       
    </div>
  );
}

export default App;