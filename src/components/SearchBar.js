import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		//by using arrow functions, it binds auto
		event.preventDefault();
		this.props.onSubmit(this.state.term);
		//in class based components, reference props object with 'this'
	};
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
			</div>
		);
	}
}

export default SearchBar;
