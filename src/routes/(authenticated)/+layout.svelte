<script lang="ts">
	import {browser} from "$app/environment"
	import {type User, onAuthStateChanged} from "firebase/auth"
	import {setContext} from "svelte"
	import {readable} from "svelte/store"

	import {goto} from "$app/navigation"

	import {auth} from "~/firebase"

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let user = readable(undefined as any as User, (set) => {
		if (browser) {
			return onAuthStateChanged(auth, (_user) => {
				if (!_user) {
					goto(`/`).catch(console.error)
				} else {
					set(_user)
				}
			})
		}
	})
	setContext(`user`, user)
</script>

{#if $user}
	<slot />
{:else}
	<p>loading...</p>
{/if}
