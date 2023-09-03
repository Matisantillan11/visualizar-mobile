import { Image, TouchableOpacityProps } from 'react-native'

import { Button } from './button'
import { FC } from 'react'
import GoogleIcon from '@visualizar/common/assets/google.png'
import { Paragraph } from '../Text/text.component'
import { colors } from '@visualizar/common/lib/colors'

export const GoogleButton: FC<TouchableOpacityProps> = (props) => {
	const { style } = props
	return (
		<Button
			{...props}
			style={[style, { flexDirection: 'row' }]}
			color={colors.primary.darkWhite}
			variant='outlined'
			size='large'>
			<Image source={GoogleIcon} style={{ marginHorizontal: 10 }} />
			<Paragraph color={colors.black.black600}>Ingresar con Gmail</Paragraph>
		</Button>
	)
}
