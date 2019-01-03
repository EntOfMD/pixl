import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit(event) {
		event.preventDefault();
	}
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<input
							type="text"
							placeholder="Type a keyword to search!"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
				<div>{this.state.term}</div>
			</div>
		);
	}
}

export default SearchBar;
