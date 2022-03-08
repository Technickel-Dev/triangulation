<script>
	import { coordinates } from '$lib/store';
	import Delaunator from 'delaunator';

	let svgEl;

	const doTriangulation = () => {
		const delaunay = Delaunator.from($coordinates);
		let triangles = delaunay.triangles;

		for (let i = 0; i < triangles.length; i += 3) {
			// Create new triangle
			let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

			// Build triangle
			polygon.setAttribute(
				'points',
				`${$coordinates[triangles[i]]} ${$coordinates[triangles[i + 1]]} ${
					$coordinates[triangles[i + 2]]
				}`
			);

			// Fill triangle with color
			polygon.setAttribute('fill', `black`);

			// Add triangle to svg
			svgEl.appendChild(polygon);
		}
	};

	const downloadSVG = () => {
		// Create a blob from the SVG code
		const svg = svgEl.outerHTML;
		const blob = new Blob([svg.toString()]);

		// Create a temporary link to initiate the SVG file download
		const tmpEl = document.createElement('a');
		tmpEl.download = 'output.svg';
		tmpEl.href = window.URL.createObjectURL(blob);
		tmpEl.click();
		tmpEl.remove();
	};
</script>

<button class="bg-yellow-500 text-white py-2 px-4 rounded mr-4" on:click={downloadSVG}>
	Download
</button>

<button class="bg-yellow-500 text-white py-2 px-4 rounded mr-4" on:click={doTriangulation}>
	Calc
</button>

<svg
	bind:this={svgEl}
	class="border-2"
	width={350}
	height={350}
	viewBox="0 0 350 350"
	xmlns="http://www.w3.org/2000/svg"
>
	<polygon points="0,100 50,25 50,75 100,0" fill="green" />
</svg>
