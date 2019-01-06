import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] };

	async onSearchSubmit(term) {
		//props flow downstream to child from parent. this function helps break that and bring props to parent from child

		const response = await axios.get(`https://api.unsplash.com/search/photos`, {
			params: {
				query: term,
			},
			headers: {
				Authorization: `Client-ID 7446b82693cf5bb8dbdaac4d26fb93c3f47187ba711ad00b3c8f66b7323a56aa`,
			},
		});

		this.setState({ images: response.data.results });
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '1vh' }}>
				{' '}
				<SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
				<h2 className="ui header imageLength">Found: {this.state.images.length} images</h2>
			</div>
		);
	}
}

export default App;
