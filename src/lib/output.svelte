<script>
	let svgEl;

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

<svg
	bind:this={svgEl}
	class="border-2"
	width={350}
	height={350}
	viewBox="0 0 350 350"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="0" y="0" width={350} height={350} fill="green" />
</svg>
