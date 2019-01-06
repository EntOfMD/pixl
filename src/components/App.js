import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit(term) {
		//props flow downstream to child from parent. this function helps break that and bring props to parent from child

		axios
			.get(`https://api.unsplash.com/search/photos`, {
				params: {
					query: term,
				},
				headers: {
					Authorization: `Client-ID 7446b82693cf5bb8dbdaac4d26fb93c3f47187ba711ad00b3c8f66b7323a56aa`,
				},
			})
			.then((res) => {
				console.log(res.data.results);
			});
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
