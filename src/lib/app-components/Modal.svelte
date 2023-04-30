<script>
	import { closeModal } from 'svelte-modals';
	import { db } from '../db';
	import { uid } from 'uid';

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

	let articleData = [];
	let isLoading = false;
	/**
	 * @type {string | null}
	 */
	let error = null;

	const addArticle = async () => {
		console.log('adding article');
		try {
			isLoading = true;
			const res = await fetch(`${import.meta.env.VITE_ARTICLE_FETCH_API}?url=${link}`);
			const data = await res.json();
			articleData = data.data;
			const id = await db.articles.add({
				uid: uid(),
				url: articleData.url,
				title: articleData.title,
				description: articleData.description,
				image: articleData.image,
				content: articleData.content,
				author: articleData.author,
				source: articleData.source,
				published: articleData.published,
				ttr: articleData.ttr
			});
			console.log(data);
			console.log(`Added article with id ${id}`);
			closeModal();
		} catch (err) {
			console.log(err);
			error = 'An error occurred while adding the article. Please try again.';
		} finally {
			isLoading = false;
		}
	};
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
			{#if error}
				<p class="text-red-500">{error}</p>
			{/if}
			<div class="actions">
				<button
					on:click={addArticle}
					class="bg-[#0f35f0] py-2 px-4 rounded text-white"
					disabled={isLoading}
				>
					{#if isLoading}
						<span class="animate-pulse">Loading...</span>
					{:else}
						OK
					{/if}
				</button>
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
