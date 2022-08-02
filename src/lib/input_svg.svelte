<script>
	import { SVG } from '@svgdotjs/svg.js';
	import { zoom } from '$lib/svg_util';

	export let inputSVG = undefined;
	export let pointRadius = 10;
	export let pointCount = 0;
	export let innerWidth = 0;
	export let calculatedHeight = 0;

	const placeCircle = (position) => {
		let draw = SVG(inputSVG);
		let circle = draw.circle(pointRadius);
		circle.center(position.x, position.y).fill('green');
		circle.click(handleCircleClick);
		pointCount++;
	};

	const getSVGCursorPosition = (e) => {
		// Get the coordinates of the click
		let point = new DOMPoint(e.clientX, e.clientY);

		// Transform the mouse coordinates to the SVG's coordinate plane
		let ctm = inputSVG.getScreenCTM().inverse();
		return point.matrixTransform(ctm);
	};

	const handleClick = (e) => {
		let point = getSVGCursorPosition(e);
		placeCircle(point);
	};

	const handleCircleClick = (e) => {
		e.stopPropagation();
		e.currentTarget.remove();
		pointCount--;
	};
</script>

<svg
	class="border-2"
	on:click={handleClick}
	bind:this={inputSVG}
	on:mousewheel={(e) => {
		zoom(e, inputSVG, inputSVG.getAttribute('viewBox').split(/\s+|,/));
	}}
	height={calculatedHeight}
	width={innerWidth / 2}
	viewBox={[0, 0, innerWidth / 2, calculatedHeight]}
/>
