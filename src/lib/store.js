import { writable } from 'svelte/store';

const coordinateStore = () => {
	const { subscribe, update } = writable([]);

	return {
		subscribe,
		addCoordinate: (x, y) => update((store) => [...store, [Math.round(x), Math.round(y)]])
	};
};

export const coordinates = coordinateStore();
