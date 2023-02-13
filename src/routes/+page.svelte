<script lang="ts">
	import {signInWithPopup} from "firebase/auth"

	import {goto} from "$app/navigation"
	import {auth, googleProvider} from "~/firebase"

	const signIn = async () => {
		await signInWithPopup(auth, googleProvider)
		await goto(`/dashboard`)
	}
</script>

<h1>Life</h1>
<button
	on:click={() => {
		signIn().catch(console.error)
	}}>Sign in</button
>
