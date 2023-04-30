<script>
	import { onMount } from 'svelte';
	import { currentArticle } from '../../store';
	import ShareActions from './ShareActions.svelte';
	/**
	 * @param {number} ttr
	 */
	function formatTTR(ttr) {
		const minutes = Math.floor(ttr / 60);
		const seconds = ttr % 60;
		return `${minutes}m ${seconds}s`;
	}
</script>

<div class="h-full w-full px-4 overflow-y-scroll custom-scrollbar">
	{#if $currentArticle}
		<div class="article-title text-6xl font-black py-7">
			{$currentArticle.title}
		</div>
		<div class="py-4">
			{#if $currentArticle.author}
				<div class="article-author text-2xl font-bold">
					By {$currentArticle.author}
				</div>
			{/if}
			{#if $currentArticle.published}
				<div class="article-date text-2xl font-bold">
					published on {$currentArticle.published}
				</div>
			{/if}
			<!-- ttr -->
			{#if $currentArticle.ttr}
				<div class="article-reading-time text-2xl font-bold">
					{formatTTR($currentArticle.ttr)} Read
				</div>
			{/if}
		</div>
		<div class="share w-full flex">
			<ShareActions />
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
