<script>
	let drawCanvas;
	let pointRadius = 10;

	const getCanvasCursorPosition = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		return { x, y };
	};

	const placePoint = (e) => {
		// Setup variables for circle
		let { x, y } = getCanvasCursorPosition(e);
		const ctx = drawCanvas.getContext('2d');
		const START_ANGLE = 0;
		const END_ANGLE = 2 * Math.PI;

		// Create and place circle
		ctx.beginPath();
		ctx.arc(x, y, pointRadius, START_ANGLE, END_ANGLE);
		ctx.fillStyle = 'green';
		ctx.fill();
	};
</script>

<input type="number" bind:value={pointRadius} />

<canvas
	bind:this={drawCanvas}
	on:mousedown={(e) => {
		placePoint(e);
	}}
	width={500}
	height={500}
/>
