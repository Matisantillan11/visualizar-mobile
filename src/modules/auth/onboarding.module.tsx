import { FC } from 'react'
import { OnboardingProps } from './interfaces/onboarding.interface'
import { OnboardingStepOne } from './components/steps/step-one'

export const OnboardingModule: FC<OnboardingProps> = ({ navigation }) => {
	const { replace } = navigation
	const handleNextStep = () => {
		replace('Login')
	}

	return <OnboardingStepOne handleNextStep={handleNextStep} />
}
