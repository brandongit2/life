import {browser} from "$app/environment"
import {redirect} from "@sveltejs/kit"
import {type User, onAuthStateChanged} from "firebase/auth"

import type {LayoutLoad} from "./$types"

import {auth} from "~/firebase"

export const load: LayoutLoad = async () => {
	if (!browser) return

	try {
		const user = await new Promise<User | null>((resolve, reject) => {
			onAuthStateChanged(auth, (user) => {
				if (user) resolve(user)
				else reject()
			})
		})
		return {user}
	} catch {
		throw redirect(307, `/`)
	}
}
