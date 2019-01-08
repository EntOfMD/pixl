import React from 'react';
import unsplash from '../api/unsplash';

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
			imageIds: response.data.results.map((id) => {
				this.setState({ imageIds: id.id });
				console.log(this.state.imageIds);
			}),
			/* imageURL: this.state.imageIds.map((x) => {
				this.setState({ imageURL: `https://api.unsplash.com/search/photos/${this.state.imageIds[x]}` });
			}), */
		});
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '1vh' }}>
				{' '}
				<SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
				<h2 className="ui header imageLength">
					Found: {this.state.images.length} images{' '}
					<img src={`https://api.unsplash.com/search/photos/${this.state.imageIds[0]}`} alt={`none`} />
				</h2>
			</div>
		);
	}
}

export default App;
