<script>
	import { onMount } from 'svelte';
	import { currentArticle } from '../../store';
</script>

<div class="h-full w-full px-4 overflow-y-scroll custom-scrollbar">
	{#if $currentArticle}
		<div class="article-title text-6xl font-black py-7">
			{$currentArticle.title}
		</div>
		<div class="article-image">
			<img src={$currentArticle.image} alt="article main pic" />
		</div>

		<div class="article-content">
			{@html $currentArticle.content}
		</div>
	{/if}
</div>
<!-- eslint ignore -->
