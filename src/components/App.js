import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './imageList';

import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [], imageIds: [], imageURL: [] };

	onSearchSubmit = async (term) => {
		//props flow downstream to child from parent. this function helps break that and bring props to parent from child

		const response = await unsplash.get(`https://api.unsplash.com/search/photos`, {
			params: {
				query: term,
			},
		});

		this.setState({
			images: response.data.results,
		});
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '1vh' }}>
				{' '}
				<SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
				<h2 className="ui header imageLength">Found: {this.state.images.length}</h2>
				<div>
					<ImageList images={this.state.images} />
				</div>
			</div>
		);
	}
}

export default App;
