import {createTRPCProxyClient, httpBatchLink} from "@trpc/client"

import type {AppRouter} from "./server/trpc"

export const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: `http://localhost:5173/trpc`,
		}),
	],
})
