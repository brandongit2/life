import {initializeApp} from "firebase/app"
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
	apiKey: `AIzaSyB9dxrserYGhq8Cfw0ceKeGogcB89iY8Hk`,
	authDomain: `lifelifelifelife.firebaseapp.com`,
	projectId: `lifelifelifelife`,
	storageBucket: `lifelifelifelife.appspot.com`,
	messagingSenderId: `971080032224`,
	appId: `1:971080032224:web:39fdbb1ec37e035cf39585`,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({prompt: `select_account`})
