import { FormProvider, useForm } from 'react-hook-form'
import { Image, SafeAreaView, View } from 'react-native'

import { AuthForm } from './components/form/auth-form'
import { AuthFormData } from './interfaces/types/auth-form-data'
import { FC } from 'react'
import { LoginProps } from './interfaces/types/auth-module'
import { Paragraph } from '@visualizar/common/ui/Text/text.component'
import authHero from '@visualizar/common/assets/secure-login-dark.png'
import { i18n } from '@visualizar/common/lib/internacionalization'

export const AuthModule: FC<LoginProps> = ({ navigation }) => {
	const formMethods = useForm<AuthFormData>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const redirectToForgot = () => {
		const { push } = navigation
		push('ForgotPassword')
	}
	return (
		<SafeAreaView>
			<View style={{ padding: 20 }}>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Image source={authHero} />
				</View>
				<View style={{ marginTop: 50 }}>
					<Paragraph size='24px' weight={500}>
						{i18n.t('auth.login.title.first-line')},
					</Paragraph>
					<Paragraph size='24px' weight={500}>
						{i18n.t('auth.login.title.second-line')}
					</Paragraph>
				</View>
				<FormProvider {...formMethods}>
					<AuthForm redirectToForgot={redirectToForgot} />
				</FormProvider>
			</View>
		</SafeAreaView>
	)
}
