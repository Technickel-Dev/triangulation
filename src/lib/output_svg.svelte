<script>
	import Delaunator from 'delaunator';
	import { SVG } from '@svgdotjs/svg.js';
	import { zoom } from '$lib/svg_util';

	export let canvas;
	export let inputSVG;
	export let outputSVG = undefined;
	export let pointCount;
	export let innerWidth = 0;
	export let calculatedHeight = 0;

	let coordinates = [];

	$: pointCount && getAllCoordinates();
	$: triangulations = doTriangulation(coordinates);

	const doTriangulation = (coordinates) => {
		let polygons = [];
		let colors = [];
		const triangles = Delaunator.from(coordinates).triangles;

		for (let i = 0; i < triangles.length; i += 3) {
			let points = [
				coordinates[triangles[i]],
				coordinates[triangles[i + 1]],
				coordinates[triangles[i + 2]]
			];

			polygons.push(`${points[0]} ${points[1]} ${points[2]}`);

			// To find the center of the triangle you add up all the coordinates
			// (in each axis) and divide by the number of points (3)
			let x = (points[0][0] + points[1][0] + points[2][0]) / 3;
			let y = (points[0][1] + points[1][1] + points[2][1]) / 3;

			// Get the color from the center of the triangle in a certain sized square
			let square_length = 3;
			let color = canvas.getContext('2d').getImageData(x, y, square_length, square_length).data;
			colors.push(color);
		}

		return { polygons, colors };
	};

	const getAllCoordinates = () => {
		let currentCoordinates = [];
		SVG(inputSVG)
			.find('circle')
			.each((point) => {
				currentCoordinates.push([point.cx(), point.cy()]);
			});

		coordinates = currentCoordinates;
	};

	const getRGBString = (colorArray) => {
		return `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
	};
</script>

<svg
	bind:this={outputSVG}
	class="border-2"
	width={innerWidth / 2}
	height={calculatedHeight}
	viewBox={[0, 0, innerWidth / 2, calculatedHeight]}
	on:mousewheel={(e) => {
		zoom(e, outputSVG, outputSVG.getAttribute('viewBox').split(/\s+|,/));
	}}
>
	{#each triangulations['polygons'] as polygon, i}
		<polygon points={polygon} fill={getRGBString(triangulations['colors'][i])} />
	{/each}
</svg>
