import logo from './logo.svg';
import './App.css';
import SideNav from './Component/SideNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import {Details, Dashboard} from "./Pages/UiElements";
import About from './Pages/About';
import Documentation from './Pages/Documentation';
import FormElement from './Pages/FormElement';
import { Analysis, BarChart } from './Pages/Report';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <SideNav/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/contact' element = {<Contact/>}/>
            <Route exact path='/dashboard' element = {<Dashboard/>}/>
            <Route exact path='/details' element = {<Details/>}/>
            <Route exact path='/about' element = {<About/> }/>
            <Route exact path='/documentation' element = {<Documentation/> }/>
            <Route exact path='/form-elements' element = {<FormElement/> }/>
            <Route exact path='/analysis' element = {<Analysis/> }/>
            <Route exact path='/bar-chart' element = {<BarChart/> }/>
         </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
