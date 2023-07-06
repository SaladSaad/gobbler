import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './searchBar.css';

export const SearchBar = ({ setResults }) => {
	const [input, setInput] = useState('');

	const fetchData = (value) => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => {
				const results = json.filter((user) => {
					return (
						value &&
						user &&
						user.name &&
						user.name.toLowerCase().includes(value.toLowerCase())
					); //checks if user exists, user name exists, and and user name includes entered value. If yes, then adds user to results
				});
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
