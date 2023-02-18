<script lang="ts">
	import {enhance} from "$app/forms"
</script>

<div class="px-12 py-8">
	<h1 class="text-2xl font-semibold">Transactions</h1>
	<form method="post" use:enhance class="flex flex-col gap-2">
		<div>
			<label for="amount">Amount</label>
			<input type="text" name="amount" id="amount" class="border border-black rounded" />
		</div>
		<button class="border border-black rounded px-2 py-1">Submit</button>
	</form>
</div>
