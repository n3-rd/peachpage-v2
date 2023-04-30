<script>
	import { auth } from '$lib/firebase';
	import { userStore } from 'sveltefire';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/app-components/Header.svelte';
	import Sidebar from '$lib/app-components/Sidebar.svelte';
	import ArticleView from '$lib/app-components/ArticleView.svelte';
	import AddArticleButton from '$lib/app-components/AddArticleButton.svelte';

	const user = userStore(auth);

	onMount(async () => {
		await auth.onAuthStateChanged((user) => {
			if (!user) {
				goto('/');
			}
		});
	});

	const logout = () => {
		auth.signOut();
		goto('/');
	};
</script>

<Header />
<div class="flex">
	<div class="w-[30%] h-[95vh]">
		<Sidebar />
	</div>
	<div class="w-[70%] h-[95vh] overflow-hidden overflow-hidden">
		<ArticleView />
		<div class="absolute bottom-4 right-4">
			<AddArticleButton />
		</div>
	</div>
</div>
