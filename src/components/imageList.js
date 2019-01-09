import React from 'react';

const imageList = (props) => {
	const images = props.images.map(({ description, id, urls }) => {
		//you can specify which nodes you want with a curly braces
		return <img key={id} src={urls.regular} alt={description} />;
	});

	return <div>{images}</div>;
};

export default imageList;
