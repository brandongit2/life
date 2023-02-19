import GitHub from "@auth/core/providers/github"
import {SvelteKitAuth, type SvelteKitAuthConfig} from "@auth/sveltekit"
import {PrismaAdapter} from "@next-auth/prisma-adapter"

import {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET} from "$env/static/private"
import {prisma} from "$lib/server/prisma"
import type {Adapter} from "@auth/core/adapters"
import type {Provider} from "@auth/core/providers"
import type {Profile} from "@auth/core/types"

console.log(typeof prisma)
export const authOptions: SvelteKitAuthConfig = {
	adapter: PrismaAdapter(prisma) as Adapter,
	providers: [
		GitHub({
			clientId: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
		}) as Provider<Profile> & {options: Record<string, unknown>},
	],
}

export const handle = SvelteKitAuth(authOptions)
