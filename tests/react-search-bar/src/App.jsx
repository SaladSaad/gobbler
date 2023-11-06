import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/searchBar';
import { SearchResultsList } from './components/searchResultsList';

function App() {
	const [results, setResults] = useState([]);
	//data is fetched, filtered, then returned through useState.setResults to be stored in results variable.
	//pass function setResults to SearchBar.jsx where results array is updated in
	return (
		<div className='App'>
			<div className='search-bar-container'>
				<SearchBar setResults={setResults} />
				<SearchResultsList results={results} />
			</div>
		</div>
	);
}

export default App;
