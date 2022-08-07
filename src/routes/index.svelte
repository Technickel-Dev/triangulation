<script>
	import { SVG } from '@svgdotjs/svg.js';
	import InputSVG from '$lib/input_svg.svelte';
	import FileInput from '$lib/file_input.svelte';
	import OutputSVG from '$lib/output_svg.svelte';
	import { insertImage } from '$lib/svg_util';

	let canvas;
	let inputSVG;
	let outputSVG;
	let pointCount;
	let innerWidth = 0;
	let innerHeight = 0;
	let file = null;

	$: hidden = !file;

	const onFileChange = (e) => {
		file = e.target.files[0];
		let url = URL.createObjectURL(file);

		let input = SVG(inputSVG);
		let output = SVG(outputSVG);
		insertImage(input, url);
		insertImage(output, url);

		initializeCanvas(url);
	};

	const initializeCanvas = (url) => {
		let img = new Image();
		img.src = url;

		img.onload = (e) => {
			let image = e.target;

			// Change canvas size
			canvas.height = image.height;
			canvas.width = image.width;

			// Draw the image
			canvas.getContext('2d').drawImage(image, 0, 0);
		};
	};
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="flex min-h-screen max-h-screen justify-center align-middle">
	<InputSVG bind:inputSVG bind:pointCount {innerWidth} {innerHeight} {hidden} />
	<OutputSVG bind:outputSVG {inputSVG} {canvas} {pointCount} {innerWidth} {innerHeight} {hidden} />
	<canvas class="hidden" bind:this={canvas} />
	<div class:hidden={!hidden} class="m-auto">
		<FileInput {onFileChange} />
	</div>
</div>
