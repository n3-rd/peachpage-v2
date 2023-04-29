<script>
	import { closeModal } from 'svelte-modals';

	// provided by <Modals />
	/**
	 * @type {any}
	 */
	export let isOpen;

	/**
	 * @type {any}
	 */
	export let title;
	/**
	 * @type {any}
	 */
	let link;
</script>

{#if isOpen}
	<div role="dialog" class="modal">
		<div class="contents w-[30vw]">
			<h2>{title}</h2>
			<input
				type="text"
				bind:value={link}
				class="w-full py-4 px-6 border-2 border-[#0f35f0] rounded-lg"
			/>
			<div class="actions">
				<button on:click={closeModal} class=" bg-[#0f35f0] py-2 px-4 rounded text-white">OK</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		min-width: 240px;
		border-radius: 6px;
		padding: 16px;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
	}

	h2 {
		text-align: center;
		font-size: 24px;
	}

	p {
		text-align: center;
		margin-top: 16px;
	}

	.actions {
		margin-top: 32px;
		display: flex;
		justify-content: flex-end;
	}
</style>
