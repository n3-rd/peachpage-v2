<script>
	import { onMount } from 'svelte';
	import { auth } from '../lib/firebase.js';
	import { userStore } from 'sveltefire';
	import { goto } from '$app/navigation';

	const user = userStore(auth);

	onMount(async () => {
		await auth.onAuthStateChanged((user) => {
			if (user) {
				goto('/app');
			}
		});
	});
</script>

<h1>Page</h1>

{#if $user}
	Logged in as {$user.displayName}
{:else}
	<a href="/login">Login</a>
	<a href="/register">Register</a>
{/if}
