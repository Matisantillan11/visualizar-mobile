import { FC, useEffect } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { Image, StyleSheet, View } from 'react-native'

import ContactUs from '@visualizar/common/assets/contact-us-dark.png'
import { ForgotPasswordForm } from './components/form/forgot-password-form'
import { ForgotPasswordModuleProps } from './interfaces/types/forgot-password-module'
import { ForgotSuccess } from './components/forgot-success'
import { Paragraph } from '@visualizar/common/ui/Text/text.component'
import { colors } from '@visualizar/common/lib/colors'
import { i18n } from '@visualizar/common/lib/internacionalization'
import { useForgotPassword } from './hooks/useForgotPassword'

export const ForgotPasswordModule: FC<ForgotPasswordModuleProps> = ({ navigation }) => {
	const formMethods = useForm({
		defaultValues: {
			email: '',
		},
	})

	const { forgotPasswordMutation } = useForgotPassword()

	const { isSuccess, isLoading } = forgotPasswordMutation

	const onForgot = (data: FieldValues) => {
		forgotPasswordMutation.mutate(data.email)
	}

	const goBackToLogin = () => {
		navigation.navigate('Login')
	}

	useEffect(() => {
		formMethods.reset()
	}, [isSuccess])

	return isSuccess ? (
		<ForgotSuccess goBackToLogin={goBackToLogin} />
	) : (
		<View style={forgotModuleStyle.forgotModuleContainer}>
			<Image source={ContactUs} />
			<View style={forgotModuleStyle.formContainer}>
				<Paragraph size='24px'>{i18n.t('auth.forgot.title')}</Paragraph>
				<Paragraph size='16px' color={colors.text.text2} style={{ marginVertical: 10 }}>
					{i18n.t('auth.forgot.subtitle')}
				</Paragraph>

				<FormProvider {...formMethods}>
					<ForgotPasswordForm onForgot={onForgot} isLoading={isLoading} />
				</FormProvider>
			</View>
		</View>
	)
}

const forgotModuleStyle = StyleSheet.create({
	forgotModuleContainer: {
		flex: 1,
		marginTop: 40,
	},
	formContainer: {
		marginTop: 40,
		paddingHorizontal: 30,
	},
})
