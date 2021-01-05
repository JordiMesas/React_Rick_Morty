import React, {
	useState,
	useReducer,
	useMemo,
	useRef,
	useCallback,
} from 'react';
import classNames from 'classnames';
import Search from './Search';
import useCharacters from '../hooks/useCharacters';

// estado inicial
const initialState = {
	favorites: [],
};

//api
const API = 'https://rickandmortyapi.com/api/character/';

//reducer
const favoriteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			return {
				// ...state,
				favorites: [...state.favorites, action.payload],
			};
		default:
			return state;
	}
};

const Characters = (props) => {
	const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
	const [search, setSearch] = useState('');
	//ponemos dentro values de inputs para ser usados
	const searchInput = useRef(null);

	const characters = useCharacters(API);

	const handleClick = (favorite) => {
		dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
	};

	// const handleSearch = ()=>{
	// 	// cogemos el value de current de useRef
	// 	setSearch(searchInput.current.value)
	// }

	const handleSearch = useCallback(
		() => {
			setSearch(searchInput.current.value);
		},
		//requiere este elemento que useCallback va escuchar y solo va escuchar otra vez cuando este elemento cambie. Pero lo ponemos vacio para poder usar el hook (no usamos este elemento)
		[]
	);

	// const filterUsers = characters.filter((user)=>{
	// 	// con includes compara si search (estado actual de input es igual al valor del input user.name)
	// 	return user.name.toLowerCase().includes(search.toLowerCase());
	// })

	//cuando cambie characters o/y cambie search useMemo recordará

	const filterUsers = useMemo(
		() =>
			characters.filter((user) => {
				// con includes compara si search (estado actual de input es igual al valor del input user.name)
				return user.name.toLowerCase().includes(search.toLowerCase());
			}),
		[characters, search]
	);

	const colorDark = () => {
		return props.darkMode === true;
	};

	return (
		<>

			<div  className='row'>
				<div className=' col-12 col-md-6 p-4'>
					<h5 className={classNames({ 'color-white': colorDark() })}>Favorites users list:</h5>
					<ul>
						{favorites.favorites.map((favorite) => (
							<li key={favorite.id} className={classNames({ 'color-dark': colorDark() })}>{favorite.name}</li>
						))}
					</ul>
				</div>
				<Search
					search={search}
					searchInput={searchInput}
					handleSearch={handleSearch}
					colorDark={colorDark}
				/>
			</div>
			<div className='row'>
				{filterUsers.map((character) => (
					<div key={character.id} className=' col-12 col-md-6 col-lg-4'>
						<img className='img-fluid' src={character.image} alt='imagenes' />
						<h4 className={classNames({ 'color-dark': colorDark() })}>
							{character.name}
						</h4>
						<ul>
							<li className={classNames({ 'color-white': colorDark() })}>
								<span className={classNames({ 'color-dark': colorDark() })}>
									Especie:
								</span>{' '}
								{character.species}
							</li>
							<li className={classNames({ 'color-white': colorDark() })}>
								<span className={classNames({ 'color-dark': colorDark() })}>
									Gender:
								</span>{' '}
								{character.gender}
							</li>
							<li className={classNames({ 'color-white': colorDark() })}>
								<span className={classNames({ 'color-dark': colorDark() })}>
									Origin:
								</span>{' '}
								{character.origin.name}
							</li>
						</ul>
						<button className='btn btn-success btn-lg mb-5' type='button' onClick={() => handleClick(character)}>
							Agregar a Favoritos
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default Characters;
