<script>
	import FileInput from '$lib/file_input.svelte';

	import Output from '$lib/output.svelte';
	import { coordinates } from '$lib/store';

	let drawCanvas;
	let pointRadius = 10;

	const getCanvasCursorPosition = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		return { x, y };
	};

	const placePoint = (x, y) => {
		// Setup variables for circle
		const ctx = drawCanvas.getContext('2d');
		const START_ANGLE = 0;
		const END_ANGLE = 2 * Math.PI;

		// Create and place circle
		ctx.beginPath();
		ctx.arc(x, y, pointRadius, START_ANGLE, END_ANGLE);
		ctx.fillStyle = 'green';
		ctx.fill();
	};

	const scaleToFit = (canvas, img) => {
		// Get the scale factor
		var scale = Math.min(canvas.width / img.width, canvas.height / img.height);

		// Get the top left position of the image
		var x = canvas.width / 2 - (img.width / 2) * scale;
		var y = canvas.height / 2 - (img.height / 2) * scale;

		// Draw the image
		const context = canvas.getContext('2d');
		context.drawImage(img, x, y, img.width * scale, img.height * scale);
	};

	const onFileChange = (e) => {
		const selectedFile = e.target.files[0];
		// fillBlack();
		let img = new Image();
		img.src = URL.createObjectURL(selectedFile);

		img.onload = (e) => {
			scaleToFit(canvas, e.target);
		};
	};
</script>

<input type="number" bind:value={pointRadius} />

{JSON.stringify($coordinates)}

<FileInput {onFileChange} />

<canvas
	class="border-2"
	bind:this={drawCanvas}
	on:mousedown={(e) => {
		let { x, y } = getCanvasCursorPosition(e);
		placePoint(x, y);
		coordinates.addCoordinate(x, y);
	}}
	width={500}
	height={500}
/>
<Output />
