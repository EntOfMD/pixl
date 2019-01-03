import React from 'react';

class SearchBar extends React.Component {
	onInputChange(event) {
		console.log(event.target.value);
	}

	render() {
		return (
			<div className="ui segment">
				<div className="ui form">
					<input
						className="field"
						type="text"
						placeholder="Type a keyword to search!"
						onChange={this.onInputChange}
					/>
				</div>
			</div>
		);
	}
}

export default SearchBar;
