<script>
	import { auth } from '$lib/firebase';
	import { userStore } from 'sveltefire';
	import { goto } from '$app/navigation';

	const user = userStore(auth);

	const logout = () => {
		auth.signOut();
		goto('/');
	};
</script>

<div class="h-[5vh] w-screen bg-[#0f35ff] text-white sticky flex justify-between px-4 py-4">
	<div class="user flex items-center gap-3">
		<div class="user-image flex justify-center items-center h-[2rem] w-[2rem]">
			{#if $user?.photoURL}
				<img src={$user?.photoURL} alt="user" class="h-full w-full rounded-full" />
			{:else}
				<img
					src="https://ui-avatars.com/api/?name={$user?.displayName}&background=random"
					alt="user"
					class="h-full rounded-xl"
				/>
			{/if}
		</div>
		<div class="user-name">
			{$user?.displayName}
		</div>
	</div>
	<div class="actions flex items-center gap-3">
		<button on:click={logout}>Logout</button>
	</div>
</div>
