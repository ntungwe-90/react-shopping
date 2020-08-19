import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Sidebar from './component/sidebar';
import Main from './component/main';

function App() {
  return (

	<div className = "container">
      <div className ="row">
      <div className="col-2" >
      <Sidebar/>

      </div>
      <div className="col-10" >
        <Main/>
      </div>
       </div>
     
    </div>

	

  );
}

export default App;
