import { writable } from 'svelte/store';

const coordinateStore = () => {
	const { subscribe, update } = writable([]);

	return {
		subscribe,
		addCoordinate: (x, y) => update((store) => [...store, { x, y }])
	};
};

export const coordinates = coordinateStore();
