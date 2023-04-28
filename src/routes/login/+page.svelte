<script>
	import {
		getAuth,
		signInWithPopup,
		GoogleAuthProvider,
		signInWithEmailAndPassword
	} from 'firebase/auth';
	import { goto } from '$app/navigation';

	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	let email = '';
	let password = '';
	/**
	 * Logs in the user with the provided email and password.
	 * @param {Event} event - The submit event from the login form.
	 * @returns {Promise<void>} - A Promise that resolves when the user is logged in.
	 */
	async function loginWithEmailPassword(event) {
		event.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			// Redirect to app page after successful login
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

<h1>Login</h1>
<button on:click={loginWithGoogle}>Login with Google</button>
<form on:submit={loginWithEmailPassword}>
	<label>
		Email:
		<input type="email" bind:value={email} required />
	</label>
	<label>
		Password:
		<input type="password" bind:value={password} required />
	</label>
	<button type="submit">Login</button>
</form>
