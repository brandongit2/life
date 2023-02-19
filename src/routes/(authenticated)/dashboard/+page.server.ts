import z from "zod"

import {prisma} from "$lib/server/prisma"
import type {Actions} from "./$types"

const inputSchema = z.object({
	idToken: z.string(),
	amount: z.number().int(),
})
export type Input = z.infer<typeof inputSchema>

export const actions: Actions = {
	default: async ({request}) => {
		const data = inputSchema.parse(Object.fromEntries((await request.formData()).entries()))

		// await prisma.transaction.create({
		// 	data: {
		// 		amount: data.amount,
		// 		date: `2023-02-18`,
		// 		description: `This is a transaction`,
		// 		userId,
		// 	},
		// })
	},
}
