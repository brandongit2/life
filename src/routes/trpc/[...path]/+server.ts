import {fetchRequestHandler} from "@trpc/server/adapters/fetch"

import {appRouter} from "$lib/server/trpc"
import type {RequestHandler} from "./$types"

export const GET: RequestHandler = async ({request}) => {
	return fetchRequestHandler({
		req: request,
		endpoint: `/trpc`,
		router: appRouter,
		createContext: () => ({}),
	})
}

export const POST: RequestHandler = async ({request}) => {
	return fetchRequestHandler({
		req: request,
		endpoint: `/trpc`,
		router: appRouter,
		createContext: () => ({}),
	})
}
