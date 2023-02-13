<script lang="ts">
	import {signOut} from "firebase/auth"

	import type {PageData} from "./$types"

	import {auth} from "../../../firebase"

	export let data: PageData
</script>

<p>You're now signed in as {data.user?.displayName}!</p>

<button
	type="button"
	on:click={() => {
		signOut(auth).catch(console.error)
	}}>Sign out</button
>
