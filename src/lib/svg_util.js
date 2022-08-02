export const insertImage = (svg, url) => {
	// Create image and send it to the back
	let image = svg.image(url);
	image.back();
};

// Credit to Tesseract (https://stackoverflow.com/questions/68492428/implement-zooming-with-viewbox-in-nested-svgs)
export const zoom = (e, svg, viewBox) => {
	let k = 1.005 ** e.deltaY;

	// Position of the mouse in SVG coordinate plane
	let ctm = svg.children[0].getScreenCTM();
	let mx = (e.clientX - ctm.e) / ctm.a;
	let my = (e.clientY - ctm.f) / ctm.d;

	// To center the zoom on the mouse, we need:
	// (mx - initialX)/initialWidth == (mx - finalX)/finalWidth
	// finalX = mx - (mx - initalX)*(finalWidth/initialWidth)
	viewBox[0] = mx - (mx - viewBox[0]) * k;
	viewBox[1] = my - (my - viewBox[1]) * k;
	viewBox[2] *= k;
	viewBox[3] *= k;

	svg.setAttribute('viewBox', viewBox);
	// Prevent the page from scrolling
	e.preventDefault();
};
