<script lang="ts">
	import {browser} from "$app/environment"
	import {onAuthStateChanged, signOut} from "firebase/auth"
	import {setContext} from "svelte"
	import {readable} from "svelte/store"
	import invariant from "tiny-invariant"

	import {goto} from "$app/navigation"
	import type {User} from "@prisma/client"

	import {auth} from "~/firebase"

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let user = readable(undefined as any as User, (set) => {
		if (!browser) return
		return onAuthStateChanged(auth, (_user) => {
			if (!_user) {
				goto(`/`).catch(console.error)
			} else {
				invariant(_user.email, `User must have an email`)
				invariant(_user.displayName, `User must have a display name`)
				invariant(_user.photoURL, `User must have a photo URL`)
				fetch(
					`/get-user?${new URLSearchParams({
						id: _user.uid,
						email: _user.email,
						name: _user.displayName,
						avatar: _user.photoURL,
					}).toString()}`,
					{
						method: `GET`,
					},
				)
					.then(async (res) => {
						const data = (await res.json()) as {user: User}
						set(data.user)
					})
					.catch(console.error)
			}
		})
	})
	setContext(`user`, user)
</script>

{#if $user}
	<div class="h-full flex flex-col">
		<div class="grow"><slot /></div>
		<div class="bg-black flex items-center justify-between p-2 text-white">
			<p class="text-sm">You're now signed in as {$user.name}!</p>

			<button
				type="button"
				class="bg-sky-900 border border-sky-700 rounded px-2 text-xs py-1 text-white/90"
				on:click={() => {
					signOut(auth).catch(console.error)
				}}>Sign out</button
			>
		</div>
	</div>
{:else}
	<p>loading...</p>
{/if}
