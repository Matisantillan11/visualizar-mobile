import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { FieldValues } from 'react-hook-form'
import Toast from 'react-native-toast-message'
import { useMutation } from 'react-query'

export const useAuthenticate = () => {
	const handleLogin = async (data: FieldValues) => {
		const auth = getAuth()
		const { email, password } = data
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				console.log({ user })
			})
			.catch((error) => {
				const errorMessage = error.message

				Toast.show({
					type: 'error',
					text1: 'Opssss!',
					text2: errorMessage,
				})
			})
	}

	const authenticateMutation = useMutation((data: FieldValues) => handleLogin(data))

	return { authenticateMutation }
}
