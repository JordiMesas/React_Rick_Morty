import React, {useContext} from 'react';
import classNames from 'classnames';
import ThemeContext from '../context/ThemeContext';


const Header = (props) => {
    
    const colorDark = ()=>{
        return  props.darkMode===true;
    }

    const color = useContext(ThemeContext);

    return(
        <header className="d-flex flex-column flex-sm-row justify-content-around p-4">
            
            <h1 style={{color}} className={classNames({ 'color-dark': colorDark()})}>
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



