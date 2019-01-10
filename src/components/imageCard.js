import React from 'react';

class imageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spans: 0,
		};
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans); //whenever the image is done loading, this event emitts (event emitter)
	}

	setSpans = () => {
		//this runs as a callback fx once the images are loaded
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 20);

		this.setState({ spans });
	};

	render() {
		const { description, urls } = this.props.image;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}
export default imageCard;
