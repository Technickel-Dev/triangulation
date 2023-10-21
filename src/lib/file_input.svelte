<script lang="ts">
	import type { ChangeEventHandler } from 'svelte/elements';

	export let onFileChange: ChangeEventHandler<HTMLInputElement>;
</script>

<input hidden type="file" id="file-btn" on:change={onFileChange} />
<label for="file-btn" class="bg-red-700 text-white py-2 px-4 rounded cursor-pointer">
	Choose Image File
</label>
