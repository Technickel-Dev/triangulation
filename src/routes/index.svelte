<script>
	const getCursorPosition = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		console.log('x: ' + x + ' y: ' + y);
	};
</script>

<canvas
	id="draw"
	on:mousedown={(e) => {
		getCursorPosition(e);
	}}
	width="500"
	height="500"
/>
