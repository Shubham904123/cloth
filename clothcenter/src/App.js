import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Home from './Home';
import AllPro from './AllPro';
import Admin from './Admin';
import AllClothes from './AllClothes';
import AddCloth from './AddCloth';


function App() {
            return (
                  <Router>
                        <Routes>
                              <Route path='/' element={<Home/>}/>
                              <Route path='/clothes' element={<AllClothes/>}/>
                              <Route path='/AddCloth' element={<AddCloth/>}/>
                              <Route path='/AllProducts' element={<AllPro/>}/>
                              <Route path='/Adminhome' element={<Admin/>}/>
                        </Routes>
                  </Router>
            )
      }

export default App;
