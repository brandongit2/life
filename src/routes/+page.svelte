<script lang="ts">
	import {browser} from "$app/environment"
	import {signIn} from "@auth/sveltekit/client"

	import {goto} from "$app/navigation"
	import {page} from "$app/stores"

	if ($page.data.session && browser) {
		goto(`/dashboard`).catch(console.error)
	}
</script>

<div class="px-12 py-8">
	<h1 class="text-2xl font-semibold">Life</h1>
	<button
		class="border border-black px-2 py-1 rounded"
		on:click={() => {
			signIn(`github`).catch(console.error)
		}}>Sign in</button
	>
</div>
