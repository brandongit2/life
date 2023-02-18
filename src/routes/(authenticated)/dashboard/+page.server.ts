import z from "zod"

import type {Actions} from "./$types"

export const actions: Actions = {
	default: async ({request}) => {
		const data = z
			.object({
				amount: z.string(),
			})
			.parse(Object.fromEntries((await request.formData()).entries()))

		console.log(data)
	},
}
