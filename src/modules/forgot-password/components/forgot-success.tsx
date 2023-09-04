import { StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native'

import { Button } from '@visualizar/common/ui/button/button'
import { FC } from 'react'
import { ForgotSucessProps } from '../interfaces/forgot-success'
import { MaterialIcons } from '@expo/vector-icons'
import { Paragraph } from '@visualizar/common/ui/Text/text.component'
import { colors } from '@visualizar/common/lib/colors'
import { i18n } from '@visualizar/common/lib/internacionalization'
import { openInbox } from 'react-native-email-link'

export const ForgotSuccess: FC<ForgotSucessProps> = ({ goBackToLogin }) => {
	const { width } = useWindowDimensions()

	return (
		<View style={successForgotStyle.container}>
			<View style={[successForgotStyle.iconContainer, { backgroundColor: colors.purple.darkPurple }]}>
				<MaterialIcons name='email' size={80} color={colors.purple.darkerPurple} />
			</View>

			<Paragraph style={successForgotStyle.title} size='20px' weight={600}>
				{i18n.t('auth.forgot.success.title')}
			</Paragraph>

			<Paragraph style={{ textAlign: 'center' }}>{i18n.t('auth.forgot.success.subtitle')}</Paragraph>

			<View style={[successForgotStyle.actionsContainer, { width }]}>
				<Button
					onPress={() => openInbox()}
					style={{ marginVertical: 10, width: width / 2 }}
					variant='solid'
					size='large'>
					<Paragraph>{i18n.t('auth.forgot.success.buttons.open')}</Paragraph>
				</Button>
				<TouchableOpacity onPress={goBackToLogin}>
					<Paragraph color={colors.text.text3}>{i18n.t('auth.forgot.success.buttons.later')}</Paragraph>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const successForgotStyle = StyleSheet.create({
	container: { alignItems: 'center', flex: 1, marginTop: 100, paddingHorizontal: 40 },
	iconContainer: {
		width: 125,
		height: 125,
		borderRadius: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: { marginTop: 35, marginBottom: 10 },
	actionsContainer: {
		marginVertical: 35,
		alignItems: 'center',
	},
})
