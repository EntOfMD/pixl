import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit(term) {
		//props flow downstream to child from parent. this function helps break that and bring props to parent from child

		axios.get(`https://api.unsplash.com/search/photos`, {});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '1vh' }}>
				{' '}
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
