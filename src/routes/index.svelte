<script>
	import DrawCanvas from '$lib/draw_canvas.svelte';
	import FileInput from '$lib/file_input.svelte';
	import Output from '$lib/output.svelte';

	let drawCanvas;
	let pointRadius = 10;

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
<DrawCanvas {pointRadius} bind:drawCanvas />
<Output />
