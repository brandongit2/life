import {onAuthStateChanged} from "firebase/auth"
import {readable} from "svelte/store"

import type {User} from "firebase/auth"

import {auth} from "./firebase"

export const authStore = readable<User | undefined>(undefined, (set) => {
	const unsubscribe = onAuthStateChanged(auth, (user) => {
		set(user ?? undefined)
	})

	return unsubscribe
})
