import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="ui segment">
				<div className="ui form">
					<input className="field" type="text" placeholder="Type a keyword to search!" />
				</div>
			</div>
		);
	}
}

export default SearchBar;
