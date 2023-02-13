<script lang="ts">
	import {onAuthStateChanged} from "firebase/auth"
	import {onMount} from "svelte"

	import {goto} from "$app/navigation"

	import {auth} from "../../firebase"

	onMount(() =>
		onAuthStateChanged(auth, (user) => {
			if (!user) goto(`/`).catch(console.error)
		}),
	)
</script>

<slot />
