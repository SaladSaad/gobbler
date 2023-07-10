import React from 'react';
import './searchResult.css';

export const SearchResult = ({ result }) => {
	const imgPath='https://image.tmdb.org/t/p/original'+result.poster_path;
	return (
		<div
			className='search-result'
			onClick={(e) => console.log(`Clicked: ${result.title}`)}
		>
			<img src={imgPath} />
			{result.title} ({result.release_date.substr(0, 4)})
		</div>
	);
};
