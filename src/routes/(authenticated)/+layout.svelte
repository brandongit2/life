<script lang="ts">
	import {browser} from "$app/environment"
	import {signOut} from "@auth/sveltekit/client"

	import {goto} from "$app/navigation"
	import {page} from "$app/stores"

	if (!$page.data.session && browser) {
		goto(`/`).catch(console.error)
	}
</script>

{#if $page.data.session}
	<div class="h-full flex flex-col">
		<div class="grow"><slot /></div>
		<div class="bg-black flex items-center justify-between p-2 text-white">
			<p class="text-sm">You're now signed in as {$page.data.session.user?.name}!</p>

			<button
				type="button"
				class="bg-sky-900 border border-sky-700 rounded px-2 text-xs py-1 text-white/90"
				on:click={() => {
					signOut().catch(console.error)
				}}>Sign out</button
			>
		</div>
	</div>
{:else}
	<p>loading...</p>
{/if}
