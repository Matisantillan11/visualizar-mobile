import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

import Toast from 'react-native-toast-message'
import { i18n } from '@visualizar/common/lib/internacionalization'
import { useMutation } from 'react-query'

export const useForgotPassword = () => {
	const handleSendEmail = async (email: string) => {
		const auth = getAuth()
		await sendPasswordResetEmail(auth, email)
			.then(() => {
				Toast.show({
					type: 'success',
					text1: i18n.t('auth.forgot.success.success'),
				})
			})
			.catch((error) => {
				const errorMessage = error.message
				Toast.show({
					type: 'error',
					text1: 'Opsssss!',
					text2: errorMessage,
				})
			})
	}

	const forgotPasswordMutation = useMutation((email: string) => handleSendEmail(email))

	return { forgotPasswordMutation }
}
