import { TextProps } from 'react-native'

export interface ParagraphProps extends TextProps {
	color?: string
	size?: string
	weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter'
}
