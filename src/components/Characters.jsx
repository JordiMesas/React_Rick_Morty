import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

const Characters = (props) => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then( response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    const colorDark = ()=>{
        return props.darkMode===true;
    }

    return(
       
        <div className="row">
            {characters.map(character => (
                <div key={character.id} className=" col-12 col-md-6 col-lg-4">
                    <img className="img-fluid" src={character.image} alt="imagenes"/>
                    <h4 className={classNames({'color-dark': colorDark()})}>{character.name}</h4>    
                    <ul>
                        <li className={classNames({'color-white': colorDark()})}><span className={classNames({'color-dark': colorDark()})}>Especie:</span> {character.species}</li> 
                        <li className={classNames({'color-white': colorDark()})}><span className={classNames({'color-dark': colorDark()})}>Gender:</span> {character.gender}</li>
                        <li className={classNames({'color-white': colorDark()})}><span className={classNames({'color-dark': colorDark()})}>Origin:</span> {character.origin.name}</li>
                    </ul>                    
                </div>
            )) }
        </div>
        
    );
}

export default Characters;
