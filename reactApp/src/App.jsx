import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Enrolled from './pages/Enrolled'
import Login from './pages/Login'
// import AppOverview from "./pages/overview/AppOverview";
// import Python from './pages/overview/Pythonoverview'
// import DataSic from './pages/overview/DataScienceoverview'
// import DataSec from './pages/overview/DataSecurityoverview'
// import DSA from './pages/overview/DSA_overview'
// import Web from './pages/overview/webOverview'
// import App from './pages/overview/AppOverview'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/enrolled" element={<Enrolled/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/overview/App" element={<AppOverview/>}/> */}
        {/* <Route path="/overview/Data-science" element={<DataSic/>}/>
        <Route path="/overview/Data-security" element={<DataSec/>}/>
        <Route path="/overview/dsa" element={<DSA/>}/>
        <Route path="/overview/web" element={<Web/>}/> */}
        {/* <Route path="/overview/app" element={<App/>}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;