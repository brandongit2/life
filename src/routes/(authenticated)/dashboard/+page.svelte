<script lang="ts">
	import {signOut} from "firebase/auth"
	import {getContext} from "svelte"

	import type {User} from "firebase/auth"
	import type {Readable} from "svelte/store"

	import {auth} from "~/firebase"

	const user = getContext<Readable<User>>(`user`)
</script>

<p>You're now signed in as {$user.displayName}!</p>

<button
	type="button"
	on:click={() => {
		signOut(auth).catch(console.error)
	}}>Sign out</button
>
