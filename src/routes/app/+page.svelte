<script>
	import { auth } from '$lib/firebase';
	import { userStore } from 'sveltefire';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const user = userStore(auth);

	onMount(() => {
		if (!$user) {
			goto('/');
		}
	});

	const logout = () => {
		auth.signOut();
		goto('/');
	};
</script>

Hello {$user?.displayName}

<button on:click={logout}>Logout</button>
