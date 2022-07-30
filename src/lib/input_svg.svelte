<script>
	import { SVG } from '@svgdotjs/svg.js';
	import { coordinates } from '$lib/store';

	export let inputSVG;
	export let pointRadius = 10;

	const placeCircle = (position) => {
		let draw = SVG(inputSVG);
		let circle = draw.circle(pointRadius);
		circle.addClass('point');
		circle.center(position.x, position.y).fill('green');
		circle.click(handleCircleClick);
	};

	const getSVGCursorPosition = (e) => {
		// Get the coordinates of the click
		let point = new DOMPoint(e.clientX, e.clientY);

		// Transform the coordinates relative to the SVG's coordinates
		let ctm = inputSVG.getScreenCTM().inverse();
		return point.matrixTransform(ctm);
	};

	const handleClick = (e) => {
		let point = getSVGCursorPosition(e);
		placeCircle(point);
		coordinates.addCoordinate(point.x, point.y);
	};

	const handleCircleClick = (e) => {
		e.stopPropagation();
		e.currentTarget.remove();
	};
</script>

<svg id="input-svg" class="border-2" on:click={handleClick} bind:this={inputSVG} />
