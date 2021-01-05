import React from 'react';
import classNames from 'classnames';

const Search = ({search, searchInput,handleSearch, colorDark}) => {
	return (
		<div className='col-12 col-md-6 p-4'>
            <h5 className={classNames({ 'color-white': colorDark() })}>Search:</h5>
			<input
				type='text'
				value={search}
				ref={searchInput}
				onChange={handleSearch}
			/>
		</div>
	);
};
export default Search;
