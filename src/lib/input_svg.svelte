<script lang="ts">
	import { SVG } from '@svgdotjs/svg.js';
	import { zoom } from '$lib/svg_util';
	import Fa from 'svelte-fa';
	import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';

	export let inputSVG = undefined;
	export let pointRadius = 10;
	export let pointCount = 0;
	export let innerWidth = 0;
	export let innerHeight = 0;
	export let hidden;
	let isModalOpen = false;

	const placeCircle = (position) => {
		let draw = SVG(inputSVG);
		let circle = draw.circle(pointRadius);
		circle.center(position.x, position.y).fill('green');
		circle.click(handleCircleClick);
		pointCount++;
	};

	const getSVGCursorPosition = (e) => {
		// Get the coordinates of the click
		let point = new DOMPoint(e.clientX, e.clientY);

		// Transform the mouse coordinates to the SVG's coordinate plane
		let ctm = inputSVG.getScreenCTM().inverse();
		return point.matrixTransform(ctm);
	};

	const handleClick = (e) => {
		let point = getSVGCursorPosition(e);
		placeCircle(point);
	};

	const handleCircleClick = (e) => {
		e.stopPropagation();
		e.currentTarget.remove();
		pointCount--;
	};
</script>

<button
	class:hidden
	class="opacity-40 absolute top-8 cursor-pointer"
	style="left: 47%;"
	on:click={() => {
		isModalOpen = true;
	}}
>
	<Fa size="lg" icon={faGear} />
</button>

<div id="settings-modal" class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box relative">
		<label
			for="settings-modal"
			class="btn btn-sm btn-circle absolute right-4 top-4"
			on:click={() => {
				isModalOpen = false;
			}}
		>
			✕
		</label>
		<h3 class="font-bold text-lg">Settings</h3>
		<label for="point-radius" class="mr-2">Point Radius</label>
		<input id="point-radius" class="input" type="number" bind:value={pointRadius} />
	</div>
</div>

<svg
	class:hidden
	class="border-2"
	on:click={handleClick}
	bind:this={inputSVG}
	on:mousewheel={(e) => {
		zoom(e, inputSVG, inputSVG.getAttribute('viewBox').split(/\s+|,/));
	}}
	height={innerHeight}
	width={innerWidth / 2}
	viewBox={[0, 0, innerWidth / 2, innerHeight]}
/>
