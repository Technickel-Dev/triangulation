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
</script>

<input type="number" bind:value={pointRadius} />

<FileInput {onFileChange} />

<canvas
	class="border-2"
	bind:this={drawCanvas}
	on:mousedown={(e) => {
		let { x, y } = getCanvasCursorPosition(e);
		placePoint(x, y);
		coordinates.addCoordinate(x, y);
	}}
	height={500}
	width={500}
/>
<Output />
