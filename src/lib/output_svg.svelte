<script>
	import Delaunator from 'delaunator';
	import { SVG } from '@svgdotjs/svg.js';
	import { zoom } from '$lib/svg_util';

	export let inputSVG;
	export let outputSVG = undefined;
	export let pointCount;
	export let innerWidth = 0;
	export let calculatedHeight = 0;

	let coordinates = [];

	$: pointCount && getAllCoordinates();

	$: polygons = doTriangulation(coordinates);

	const doTriangulation = (coordinates) => {
		let polygons = [];
		const triangles = Delaunator.from(coordinates).triangles;

		for (let i = 0; i < triangles.length; i += 3) {
			polygons.push(`
				${coordinates[triangles[i]]} 
				${coordinates[triangles[i + 1]]}
				${coordinates[triangles[i + 2]]}
			`);
		}

		return polygons;
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
	{#each polygons as polygon}
		<polygon points={polygon} fill="black" />
	{/each}
</svg>
