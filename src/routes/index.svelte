<script>
	import { onMount } from 'svelte';
	import InputSVG from '$lib/input_svg.svelte';
	import FileInput from '$lib/file_input.svelte';
	import OutputSVG from '$lib/output_svg.svelte';

	let drawCanvas;
	let inputSVG;
	let outputSVG;
	let pointRadius = 10;
	let pointCount;
	let innerWidth = 0;
	let innerHeight = 0;
	let calculatedHeight;

	const onFileChange = (e) => {
		const selectedFile = e.target.files[0];
		// fillBlack();
		let img = new Image();
		img.src = URL.createObjectURL(selectedFile);

		img.onload = (e) => {
			let image = e.target;

			// Change canvas size
			drawCanvas.height = image.height;
			drawCanvas.width = image.width;

			// Draw the image
			const context = drawCanvas.getContext('2d');
			context.drawImage(image, 0, 0);
		};
	};

	const downloadSVG = () => {
		// Create a blob from the SVG code
		const svg = outputSVG.outerHTML;
		const blob = new Blob([svg.toString()]);

		// Create a temporary link to initiate the SVG file download
		const tmpEl = document.createElement('a');
		tmpEl.download = 'output.svg';
		tmpEl.href = window.URL.createObjectURL(blob);
		tmpEl.click();
		tmpEl.remove();
	};

	onMount(async () => {
		calculatedHeight =
			innerHeight - 3 * parseInt(window.getComputedStyle(document.documentElement).fontSize);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="flex flex-col min-h-screen max-h-screen">
	<div class="h-12">
		<input type="number" bind:value={pointRadius} />
		<FileInput {onFileChange} />
		<button class="bg-yellow-500 text-white py-2 px-4 rounded" on:click={downloadSVG}>
			Download
		</button>
	</div>
	<div class="flex">
		<InputSVG bind:inputSVG bind:pointCount {pointRadius} {innerWidth} {calculatedHeight} />
		<OutputSVG bind:outputSVG {inputSVG} {pointCount} {innerWidth} {calculatedHeight} />
	</div>
</div>
