<script>
	import { onMount } from 'svelte';
	import { currentArticle } from '../../store';
	import ShareActions from './ShareActions.svelte';
	import { liveQuery } from 'dexie';
	import { db } from '../db';
	let articleData = liveQuery(() => db.articles.toArray());
	/**
	 * @param {number} ttr
	 */
	function formatTTR(ttr) {
		const minutes = Math.floor(ttr / 60);
		const seconds = ttr % 60;
		return `${minutes}m ${seconds}s`;
	}
</script>

{#if articleData == null}
	<div class="h-full w-full flex justify-center items-center">
		<div class="text-4xl font-bold">No articles saved</div>
	</div>
	<!-- else if -->
{:else if $currentArticle.url === ''}
	<div class="h-full w-full flex justify-center items-center">
		<div class="text-4xl font-bold">No article selected</div>
	</div>
{:else}{/if}

<div class="h-full w-full px-4 overflow-y-scroll custom-scrollbar dark:bg-black dark:text-gray-100">
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
				<div class="article-reading-time text-lg font-normal">
					{formatTTR($currentArticle.ttr)} Read
				</div>
			{/if}
		</div>
		<div>
			Original link:
			<a
				href={$currentArticle.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-500 underline"
			>
				{$currentArticle.url}
			</a>
		</div>
		<div class="share w-full flex">
			<ShareActions />
		</div>
		<div class="article-image pt-4 pb-7">
			<img src={$currentArticle.image} alt="article main pic" />
		</div>

		<div class="article-content">
			{@html $currentArticle.content}
		</div>
	{/if}
</div>
<!-- eslint ignore -->
