import { Controller, FieldValues, useForm } from 'react-hook-form'
import { View, useWindowDimensions } from 'react-native'

import { Button } from '@visualizar/common/ui/button/button'
import { FC } from 'react'
import { Input } from '@visualizar/common/ui/Input/input'
import { Paragraph } from '@visualizar/common/ui/Text/text.component'
import { i18n } from '@visualizar/common/lib/internacionalization'

export interface ForgotPasswordFormProps {
	onForgot: (data: FieldValues) => void
	isLoading: boolean
}

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ onForgot, isLoading }) => {
	const { width } = useWindowDimensions()

	const {
		control,
		handleSubmit,
		clearErrors,
		formState: { errors },
	} = useForm()

	return (
		<View style={{ marginVertical: 20 }}>
			<Controller
				rules={{
					required: true,
				}}
				name='email'
				control={control}
				render={({ field: { value, onChange, onBlur } }) => (
					<Input
						placeholder={i18n.t('auth.forgot.form.email.placeholder')}
						keyboardType='email-address'
						size='medium'
						variant='solid'
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						error={errors.email ? true : false}
						onFocus={() => clearErrors('email')}
						disabled={isLoading}
					/>
				)}
			/>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
				<Button onPress={handleSubmit(onForgot)} style={{ width: width / 2 }} variant='solid' size='medium'>
					<Paragraph>{i18n.t('auth.forgot.form.button')}</Paragraph>
				</Button>
			</View>
		</View>
	)
}
