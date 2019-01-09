import '../css/imageList.css';

import React from 'react';

import ImageCard from './imageCard';

const imageList = (props) => {
	const images = props.images.map((image) => {
		//you can specify which nodes you want with a curly braces
		return <ImageCard key={image.id} image={image} />;
	});

	return <div className="image-list">{images}</div>;
};

export default imageList;
