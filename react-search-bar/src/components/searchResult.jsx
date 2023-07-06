import React from 'react';
import './searchResult.css';

export const SearchResult = ({ result }) => {
	return (
		<div
			className='search-result'
			onClick={(e) => console.log(`Clicked: ${result.name}`)}
		>
			{result.name}
		</div>
	);
};
