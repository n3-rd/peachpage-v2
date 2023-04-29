<script>
	import { onMount } from 'svelte';
	import { liveQuery } from 'dexie';
	import { db } from '../db';
	import { currentArticle } from '../../store';

	let articleData = liveQuery(() => db.articles.toArray());

	function setCurrentArticle(article) {
		currentArticle.set(article);
	}

	const deleteArticle = async (article) => {
		try {
			await db.articles.delete(article.id);
		} catch (err) {
			console.log(err);
		}
	};
</script>

<div class="h-full w-full bg-slate-200 px-2 py-2 overflow-y-scroll custom-scrollbar">
	{#if $articleData}
		<ul class="divide-y divide-slate-100 h-full">
			{#each $articleData as article (article.uid)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="w-full flex items-center gap-4 px-4 py-3 cursor-pointer bg-white text-slate-700 rounded hover:bg-[#0f35f0] hover:text-[#fff]"
					on:click={() => setCurrentArticle(article)}
				>
					<div class="w-1/3 flex items-center self-center">
						<img
							src={article.image}
							alt="product"
							class="h-full w-full max-w-full rounded object-cover"
						/>
					</div>
					<div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
						<h4 class="w-32 text-base truncate">
							{article.title}
						</h4>
					</div>
					<div class="ml-auto">
						<button
							class="bg-transparent hover:bg-[#0f35f0] text-[#0f35f0] hover:text-white py-1 px-2 rounded-full"
							on:click={(event) => {
								event.stopPropagation();
								deleteArticle(article);
							}}
							><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
								><path fill="#ffffff" d="M12 12h2v12h-2zm6 0h2v12h-2z" /><path
									fill="currentColor"
									d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"
								/></svg
							>
						</button>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
