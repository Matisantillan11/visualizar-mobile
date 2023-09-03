import { AuthRootParamsList } from '@visualizar/common/stacks/types/auth-stack.type'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type OnboardingProps = NativeStackScreenProps<AuthRootParamsList, 'Onboarding'>

export interface StepOneProps {
	handleNextStep: () => void
}
