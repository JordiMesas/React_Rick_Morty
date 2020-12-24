import React, { useState } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
// import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={classNames({
      'bg-dark': darkMode===true,                                           
    })} >     
        <div className="container">
          <Header onHandleClick={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
          <Characters darkMode={darkMode} />      
       </div>
    </div>
  );
}

export default App;
