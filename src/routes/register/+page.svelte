<script>
	import {
		getAuth,
		createUserWithEmailAndPassword,
		updateProfile,
		signInWithPopup,
		GoogleAuthProvider
	} from 'firebase/auth';
	import { goto } from '$app/navigation';
	import GoogleSignInButton from '$lib/GoogleSignInButton.svelte';

	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	let name = '';
	let email = '';
	let password = '';

	/**
	 * Registers a new user with the provided name, email, and password.
	 * @param {Event} event - The submit event from the registration form.
	 * @returns {Promise<void>} - A Promise that resolves when the user is registered and logged in.
	 */
	async function register(event) {
		event.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			// @ts-ignore
			await updateProfile(auth.currentUser, { displayName: name });
			const user = userCredential.user;
			// Redirect to app page after successful registration
			goto('/app');
		} catch (error) {
			console.log(error);
		}
	}

	async function loginWithGoogle() {
		try {
			const result = await signInWithPopup(auth, provider);
			const user = result.user;
			// Redirect to app page after successful login
			goto('/app');
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div class="container h-screen w-screen flex p-2">
	<div
		class="login-info w-[40%] h-full bg-[#0f35ff] rounded-lg flex justify-center items-center text-white font-black relative p-4"
	>
		<div class="absolute left-6 top-9 h-16 w-16">PEACHPAGE</div>
		<div class="text-3xl">Save articles that matter to you and share or read them later ⚡</div>
		<div class="absolute inset-x-0 bottom-3 text-center">12k articles saved 🎉</div>
	</div>
	<div class="register-form w-[80%] h-full p-6 flex justify-center items-center">
		<div>
			<h1 class="text-4xl font-black">Register</h1>
			<!-- <button on:click={loginWithGoogle}>Login with Google</button> -->
			<div class="py-3">
				<GoogleSignInButton on:click={loginWithGoogle} />
			</div>
			<form on:submit={register}>
				<div class="py-4">
					<label class="font-semibold">
						Name:
						<input
							class="w-full py-4 px-6 border-2 border-[#0f35f0] rounded-lg"
							type="name"
							bind:value={name}
							required
						/>
					</label>
				</div>

				<div class="py-4">
					<label class="font-semibold">
						Email:
						<input
							class="w-full py-4 px-6 border-2 border-[#0f35f0] rounded-lg"
							type="email"
							bind:value={email}
							required
						/>
					</label>
				</div>

				<div class="py-4">
					<label class="font-semibold">
						Password:
						<input
							class="w-full py-4 px-6 border-2 border-[#0f35f0] rounded-lg"
							type="password"
							bind:value={password}
							required
						/>
					</label>
				</div>

				<button type="submit" class="w-full py-3 px-6 bg-[#0f35f0] rounded-lg text-white font-bold"
					>Register</button
				>
			</form>
			<div class="text-[#0f35f0] text-center pt-2">
				<a href="/login">Have an account? Login</a>
			</div>
		</div>
	</div>
</div>
<!--
<h1>Register</h1>
<form on:submit={register}>
	<label>
		Name:
		<input type="text" bind:value={name} />
	</label>
	<label>
		Email:
		<input type="email" bind:value={email} />
	</label>
	<label>
		Password:
		<input type="password" bind:value={password} />
	</label>
	<button type="submit">Register</button>
</form> -->
