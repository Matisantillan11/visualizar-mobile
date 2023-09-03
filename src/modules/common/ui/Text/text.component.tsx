import { ParagraphProps } from './interfaces/text.interfaces'
import { Text } from 'react-native'
import styled from 'styled-components'

export const Paragraph = styled(Text)<ParagraphProps>`
	font-weight: ${({ weight }) => weight ?? 400};
	font-size: ${({ size }) => size ?? '14px'};
	color: ${({ theme, color }) => color ?? theme.text.text1};
`
