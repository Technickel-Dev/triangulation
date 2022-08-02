<script>
	export let onFileChange;
	let files;
</script>

<input hidden type="file" id="file-btn" bind:files on:change={onFileChange} />
<label for="file-btn" class="bg-red-500 text-white py-2 px-4 rounded" style={{ cursor: 'pointer' }}>
	Choose File
</label>
