<script>
	import { auth } from '../lib/firebase.js';
	import { userStore } from 'sveltefire';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	const user = userStore(auth);

	onMount(() => {
		if ($user) {
			goto('/app');
		}
	});
</script>

<h1>Page</h1>
<a href="/login">Login</a>
<a href="/register">Register</a>
