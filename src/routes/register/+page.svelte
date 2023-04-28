<script>
	import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
	import { goto } from '$app/navigation';

	const auth = getAuth();
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
</script>

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
</form>
