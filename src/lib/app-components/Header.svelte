<script>
	import { auth } from '$lib/firebase';
	import { userStore } from 'sveltefire';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	const user = userStore(auth);

	const logout = () => {
		auth.signOut();
		goto('/');
	};

	let darkMode = false;

	const handleSwitchDarkMode = () => {
		console.log('dark mode');
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<!-- Component: Navbar with Avatar -->
<!-- Header -->
<header
	class="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden
	dark:bg-black select-none
	"
>
	<div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
		<nav
			aria-label="main navigation"
			class="flex h-[3.5rem] items-stretch justify-between font-medium text-slate-700 dark:text-gray-100"
		>
			<!-- Brand logo -->
			<!-- svelte-ignore a11y-invalid-attribute -->
			<div
				id="peachpage-logo"
				aria-label="Peachpage Logo"
				aria-current="page"
				class="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
			>
				<svg
					width="300"
					height="300"
					viewBox="0 0 300 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="w-12 h-12 bg-[#0f35f0]"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
						fill="rgba(255,255,255,.2)"
					/>
				</svg>
				Peachpage
			</div>
			<!-- Mobile trigger -->
			<button
				class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
					/>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
					/>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
					/>
				</div>
			</button>
			<!-- Navigation links -->
			<ul
				role="menubar"
				aria-label="Select page"
				class="invisible absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100"
			>
				<li role="none" class="flex items-stretch">
					<a
						role="menuitem"
						aria-haspopup="false"
						tabindex="0"
						class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#0f34f0] focus:bg-slate-300 focus:outline-none focus-visible:outline-none lg:px-8"
						href="https://github.com/n3-rd/peachpage"
					>
						<span>Github</span></a
					>
				</li>
				<li role="none" class="flex items-stretch">
					<a
						role="menuitem"
						aria-current="page"
						aria-haspopup="false"
						tabindex="0"
						class="flex items-center gap-2 py-4 transition-colors duration-300 text-[#abb0c7] hover:text-[#0f83f0] focus:bg-slate-300 focus:outline-none focus-visible:outline-none lg:px-8"
						href="#"
					>
						<button class="text-gray-500 dark:text-gray-400" on:click={handleSwitchDarkMode}>
							{darkMode ? 'Light' : 'Dark'} Mode
						</button>
					</a>
				</li>
				<li role="none" class="flex items-stretch">
					<div
						role="menuitem"
						aria-haspopup="false"
						tabindex="0"
						class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#0f35f0] focus:bg-slate-300 focus:outline-none focus-visible:outline-none lg:px-8"
					>
						<button on:click={logout}>Logout</button>
					</div>
				</li>
			</ul>
			<div class="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
				<!-- Avatar -->
				{#if $user?.photoURL}
					<div
						class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded"
					>
						<img
							src={$user?.photoURL}
							alt={$user?.displayName}
							title={$user?.displayName}
							width="48"
							height="48"
							class="max-w-full rounded"
						/>
					</div>
				{:else}
					<div
						class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded"
					>
						<img
							src="https://ui-avatars.com/api/?name={$user?.displayName}&background=random"
							alt={$user?.displayName}
							title={$user?.displayName}
							width="48"
							height="48"
							class="max-w-full rounded"
						/>
					</div>
					<!-- End Avatar -->
				{/if}
			</div>
		</nav>
	</div>
</header>
<!-- End Navbar with Avatar-->
