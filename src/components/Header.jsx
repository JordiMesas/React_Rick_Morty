import React from 'react';
import classNames from 'classnames';


const Header = (props) => {
    
    const colorDark = ()=>{
        return  props.darkMode===true;
    }

    return(
        <header className="d-flex flex-column flex-sm-row justify-content-around p-4">
            
            <h1 className={classNames({ 'color-dark': colorDark()})}>
                ReactHooks - {props.darkMode ?
                'Dark Mode':                                                          
                'Light Mode'}  
             </h1>                      
            
            {/* <button type="button" onClick={ () => setDarkMode(!darkMode) }>{darkMode ? 'Dark Mode': 'Light Mode'}</button> */}
            <button className={classNames('btn btn-light', {
                                'btn btn-dark': colorDark()                                         
                              })}             
            type="button" onClick={props.onHandleClick }>Change mode</button>

        </header>
    );
}

export default Header;



