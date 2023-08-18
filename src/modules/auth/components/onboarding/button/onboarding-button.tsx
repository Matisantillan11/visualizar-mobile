import Icon from '@expo/vector-icons/Ionicons'
import { colors } from '@visualizar/common/lib/colors'
import styled from 'styled-components/native'

const SCircleContainer = styled.View`
	width: 45px;
	height: 45px;
	border: 2px;
	border-color: ${({ theme }) => theme.purple.mediumPurple};
	border-radius: 100%;
	justify-content: center;
	align-items: center;
	margin-top: 36px;
`
export const SIconContainer = styled.View`
	width: 30px;
	height: 30px;
	background: ${({ theme }) => theme.purple.mediumPurple};
	border-radius: 100%;
	justify-content: center;
	align-items: center;
`

export const OnboardingButton = () => {
	return (
		<SCircleContainer>
			<SIconContainer>
				<Icon name='chevron-forward-outline' size={20} color={colors.primary.white} />
			</SIconContainer>
		</SCircleContainer>
	)
}
