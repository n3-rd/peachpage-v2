<script>
	import { onMount } from 'svelte';
	import { liveQuery } from 'dexie';
	import { db } from '../db';
	import { currentArticle } from '../../store';

	let articleData = liveQuery(() => db.articles.toArray());

	function setCurrentArticle(article) {
		currentArticle.set(article);
	}
</script>

<div class="h-full w-full bg-slate-200 px-2 py-2 overflow-y-scroll">
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
				</li>
			{/each}
		</ul>
	{/if}
</div>
