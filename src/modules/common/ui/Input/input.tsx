import { InputProps, InputSizes, InputStyledProps } from './interfaces/input.interface'
import { TextInput, View } from 'react-native'

import { FC } from 'react'
import { Paragraph } from '../Text/text.component'
import { colors } from '@visualizar/common/lib/colors'
import { styled } from 'styled-components/native'

export const SInputWrapper = styled(View)<{ size: InputSizes; error?: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	padding: 0 4px;
	height: ${({ size }) => (size === 'medium' ? '30px' : '35px')};
	border: ${({ theme, error }) => (error ? `2px solid ${theme.error.errorColor}` : `2px solid ${theme.text.text2}`)};
`

export const SInputContainer = styled(View)`
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

export const SInputErrorContainer = styled(View)`
	width: 95%;
	position: absolute;
	left: 0;
	bottom: -35px;
	border: ${({ theme }) => `2px solid ${theme.error.errorColor}`};
	border-radius: 4px;
	padding: 4px;
	flex-direction: row;
	justify-content: space-between;
`

export const SInput = styled(TextInput)<InputStyledProps>`
	width: ${({ leftIcon, rightIcon }) => (leftIcon || rightIcon ? '90%' : '95%')};
	height: 100%;
	background: ${({ theme, disabled }) => (disabled ? theme.text.text3 : 'transparent')};
	color: ${({ theme, disabled }) => (disabled ? theme.grey.grey500 : theme.text.text1)};
`

export const Input: FC<InputProps> = (props) => {
	const { disabled, size, rightIcon, leftIcon, error, errorMessage } = props

	return (
		<SInputContainer>
			<SInputWrapper size={size} error={error}>
				{leftIcon}
				<SInput
					editable={!disabled}
					placeholderTextColor={disabled ? colors.text.text2 : colors.text.text2}
					{...props}
				/>
				{rightIcon}
			</SInputWrapper>
			{error && errorMessage && (
				<SInputErrorContainer>
					<Paragraph weight={600} color={colors.error.errorColor}>
						{errorMessage}
					</Paragraph>
				</SInputErrorContainer>
			)}
		</SInputContainer>
	)
}
