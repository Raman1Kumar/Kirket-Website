
import Nav from "./components/navbar/navbar";
import Page1 from "./components/page1/Page1";
import firebase from "./firebase";
import Login from "./components/login/Login";
import Protected from "./components/protected/Protected";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./components/page2/homepage";

import "./App.css"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/protected' element={<Protected />} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
