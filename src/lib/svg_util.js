export const insertImage = (svg, url) => {
	// Create image and send it to the back
	let image = svg.image(url);
	image.back();
};
