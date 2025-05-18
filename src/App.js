import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Landingpage from './stores/pages/Landingpage';

import Mobilepage from './stores/pages/Mobilepage';
import Computerpage from './stores/pages/Computerpage';
import Menpage from './stores/pages/Menpage';
import Womenpage from './stores/pages/Womenpage';
import Kitchenpage from './stores/pages/Kitchenpage';
import Furniturepage from './stores/pages/Furniturepage';
import Tvspage from './stores/pages/Tvspage';
import Fridgepage from './stores/pages/Fridgepage';


function App() {
  return (

    <Routes>
      <Route path='/' element={ <Landingpage/>}/>
      <Route path='/mobiles' element={ <Mobilepage/>}/>
      <Route path='/computers' element={ <Computerpage/>}/>
      <Route path='/men' element={ <Menpage/>}/>
      <Route path='/women' element={ <Womenpage/>}/>
      <Route path='/kitchen' element={ <Kitchenpage/>}/>
      <Route path='/furniture' element={ <Furniturepage/>}/>
      <Route path='/tv' element={ <Tvspage/>}/>
      <Route path='/fridge' element={ <Fridgepage/>}/>


    </Routes>



  
  );
}

export default App;
