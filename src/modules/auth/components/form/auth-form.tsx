import { Controller, FieldValues, useForm } from 'react-hook-form'
import { Fragment, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { Button } from '@visualizar/common/ui/button/button'
import { Input } from '@visualizar/common/ui/Input/input'
import { Ionicons } from '@expo/vector-icons'
import { Paragraph } from '@visualizar/common/ui/Text/text.component'
import Toast from 'react-native-toast-message'
import { colors } from '@visualizar/common/lib/colors'
import { i18n } from '@visualizar/common/lib/internacionalization'

export const AuthForm = () => {
	const { width } = useWindowDimensions()
	const [isLogin, setIsLogin] = useState<boolean>(false)

	const {
		control,
		clearErrors,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data: FieldValues) => {
		setIsLogin(true)
		const auth = getAuth()
		const { email, password } = data
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				console.log({ user })
			})
			.catch((error) => {
				const errorMessage = error.message
				reset()
				Toast.show({
					type: 'error',
					text1: 'Opssss!',
					text2: errorMessage,
				})
			})
			.finally(() => setIsLogin(false))
	}

	return (
		<Fragment>
			<View style={{ marginVertical: 20 }}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					name='email'
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							variant='outlined'
							size='medium'
							placeholder={i18n.t('auth.login.form.email.placeholder')}
							onChangeText={onChange}
							value={value}
							onBlur={onBlur}
							onFocus={() => clearErrors('email')}
							error={errors.email ? true : false}
						/>
					)}
				/>
			</View>
			<View>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					name='password'
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							variant='outlined'
							size='medium'
							placeholder={i18n.t('auth.login.form.password.placeholder')}
							onChangeText={onChange}
							value={value}
							onBlur={onBlur}
							onFocus={() => clearErrors('password')}
							error={errors.password ? true : false}
							rightIcon={<Ionicons name='eye-outline' size={16} color={colors.text.text3} />}
						/>
					)}
				/>
			</View>

			<View style={authFormStyle.actionsContainer}>
				<Button
					style={[{ width: width - 100 }, authFormStyle.action]}
					variant='solid'
					size='large'
					onPress={handleSubmit(onSubmit)}
					disabled={isLogin}>
					<Paragraph>{i18n.t('auth.login.form.button')}</Paragraph>
				</Button>

				<TouchableOpacity style={authFormStyle.forgotPassword}>
					<Paragraph weight={700} color={colors.purple.mediumPurple}>
						{i18n.t('auth.login.forgot')}
					</Paragraph>
				</TouchableOpacity>
			</View>
			<View style={authFormStyle.registerContainer}>
				<Paragraph>
					{i18n.t('auth.login.register.account')}
					<TouchableOpacity style={{ marginTop: -3 }}>
						<Paragraph color={colors.purple.mediumPurple} weight={500}>
							{' '}
							{i18n.t('auth.login.register.create')}
						</Paragraph>
					</TouchableOpacity>
				</Paragraph>
			</View>
		</Fragment>
	)
}

const authFormStyle = StyleSheet.create({
	forgotPassword: {
		marginVertical: 5,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},

	actionsContainer: {
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},

	action: {
		marginVertical: 10,
	},
	registerContainer: {
		marginTop: 140,
		justifyContent: 'center',
		alignItems: 'center',
	},
	register: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})
