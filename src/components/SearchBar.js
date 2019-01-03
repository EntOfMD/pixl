import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	render() {
		return (
			<div className="ui segment">
				<div className="ui form">
					<input
						className="field"
						type="text"
						placeholder="Type a keyword to search!"
						value={this.state.term}
						onChange={(e) => this.setState({ term: e.target.value })}
					/>
				</div>
			</div>
		);
	}
}

export default SearchBar;
