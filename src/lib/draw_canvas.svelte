<script>
	import { coordinates } from '$lib/store';

	export let drawCanvas;
	export let pointRadius = 10;

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
</script>

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
