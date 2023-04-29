<script>
	import { onMount } from 'svelte';
	/**
	 * @type {never[]}
	 */
	let articleData = [];
	let articleDataContent = '';

	onMount(async () => {
		const res = await fetch(
			`${
				import.meta.env.VITE_ARTICLE_FETCH_API
			}?url=https:/dev.to/n3rd/build-a-simple-web-app-with-sveltekit-and-appwrite-1bb8`
		);
		const data = await res.json();
		console.log(data);
		articleData = data.data;
		articleDataContent = data.data.content;
	});
</script>

<div class="h-full w-full px-4 overflow-y-scroll">
	<div class="article-title text-6xl font-black py-7">
		{articleData.title}
	</div>
	<div class="article-image">
		<img src={articleData.image} alt="article main pic" />
	</div>

	<div class="article-content">
		{@html articleDataContent}
	</div>
</div>
<!-- eslint ignore -->
