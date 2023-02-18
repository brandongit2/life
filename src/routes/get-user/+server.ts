import {type RequestHandler, json} from "@sveltejs/kit"
import {z} from "zod"

import {prisma} from "~/lib/server/prisma"

export const GET: RequestHandler = async ({url}) => {
	const id = z.string().parse(url.searchParams.get(`id`))
	const email = z.string().email().parse(url.searchParams.get(`email`))
	const name = z.string().parse(url.searchParams.get(`name`))
	const avatar = z.string().url().parse(url.searchParams.get(`avatar`))

	const user = await prisma.user.findUnique({where: {id}})
	if (user) {
		return json({user})
	} else {
		const user = await prisma.user.create({
			data: {
				id,
				email,
				name,
				avatar,
			},
		})
		return json({user})
	}
}
