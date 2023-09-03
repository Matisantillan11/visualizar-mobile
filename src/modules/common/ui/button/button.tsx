import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styled } from 'styled-components'

type ButtonVariants = 'solid' | 'outlined'
type ButtonSize = 'medium' | 'large'
interface ButtonProps extends TouchableOpacityProps {
	variant: ButtonVariants
	size: ButtonSize
	color?: string
	disabled?: boolean
}

export const Button = styled(TouchableOpacity)<ButtonProps>`
	height: ${({ size }) => (size === 'medium' ? '30px' : '35px')};
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	border: ${({ theme, variant }) => (variant === 'outlined' ? `2px solid ${theme.purple.darkerPurple}` : '')};
	background-color: ${({ theme, variant, color, disabled }) =>
		disabled ? theme.text.text3 : color ? color : variant === 'solid' ? theme.purple.darkerPurple : 'transparent'};
`
