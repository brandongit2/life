import {initTRPC} from "@trpc/server"
import {z} from "zod"

import {prisma} from "./prisma"

const t = initTRPC.create()

const router = t.router
const publicProcedure = t.procedure

export const appRouter = router({
	getUser: publicProcedure
		.input(
			z.object({
				id: z.string(),
				email: z.string().email(),
				name: z.string(),
				avatar: z.string().url(),
			}),
		)
		.query(async (req) => {
			const {id, email, name, avatar} = req.input
			const user = await prisma.user.findUnique({where: {id}})
			if (user) {
				return {user}
			} else {
				const user = await prisma.user.create({
					data: {
						id,
						email,
						name,
						avatar,
					},
				})
				return {user}
			}
		}),
})

export type AppRouter = typeof appRouter
