import React from 'react'
import { TextInputProps } from 'react-native-paper'

export type InputSizes = 'small' | 'medium' | 'large'
export type InputVariants = 'outlined' | 'solid'

export interface InputStyledProps {
	size: InputSizes
	variant: InputVariants
	disabled?: boolean
	leftIcon?: React.ReactElement
	rightIcon?: React.ReactElement
}

export interface InputProps extends TextInputProps, InputStyledProps {
	error?: boolean
	errorMessage?: string
}
