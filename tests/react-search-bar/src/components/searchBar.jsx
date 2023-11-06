import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './searchBar.css';

const options = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTNlY2ZiM2IzNGYyZGRjODhhN2Q5NmJjZjI1YmYyYyIsInN1YiI6IjY0NmVmY2QwMTEzMGJkMDFlYzk3NDgxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCyfm2IkCQO_h839GWVhTZNyRhLMOd78awOjffRmVvk'
	}
  };

export const SearchBar = ({ setResults }) => {
	const [input, setInput] = useState('');

	const fetchData = (value) => {
		fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`, options)
		.then(response => response.json())
		.then(json => {
			//const movies=json.results.map(json.results.title, json.results.id)
			const results=(json.results.filter((movie)=>{
			  return (
				value &&
				movie &&
				movie.title
			  );
			}));
			setResults(results);
			});
	};

	const handleChange = (value) => {
		setInput(value); //updates input value to whatever user has typed
		fetchData(value); //calls api with updated input value
	};
	return (
		<div className='input-wrapper'>
			<FaSearch id='search-icon' />
			<input
				type='text'
				placeholder='Type to search...'
				value={input}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
};
