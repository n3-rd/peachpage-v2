<script>
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let articles = [];
	onMount(async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();
		articles = data;
	});
</script>

<div class="h-full w-full bg-slate-200 px-2 py-2 overflow-y-scroll">
	{#each articles as article}
		<div
			class="article w-full h-[3rem] py-6 my-4 rounded-lg bg-white cursor-pointer hover:bg-slate-300 flex gap-2 items-center"
		>
			<div class="article-image h-[inherit]">
				<img
					src="https://ui-avatars.com/api/?name=John+Doe"
					alt="article"
					class="h-full rounded-l-lg"
				/>
			</div>
			<div class="article-info">
				<div class="article-title font-bold">{article.title.substring(0, 20)}...</div>
				<div class="article-author font-thin">John Doe</div>
			</div>
		</div>
	{/each}
</div>
