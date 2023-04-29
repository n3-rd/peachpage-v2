<script>
	import { openModal } from 'svelte-modals';
	import Modal from './Modal.svelte';

	function handleClick() {
		openModal(Modal, { title: 'Article Link' });
	}
</script>

<button
	class="h-[4rem] w-[4rem] bg-[#0f35ff] p-4 rounded-full cursor-pointer"
	on:click={handleClick}
>
	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
		><path fill="#ffffff" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" /></svg
	>
</button>
