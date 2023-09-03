import { Image, SafeAreaView, Text, View, useWindowDimensions } from 'react-native'

import { FC } from 'react'
import { OnboardingButton } from '../onboarding/button/onboarding-button'
import { StepOneProps } from '@visualizar/auth/interfaces/onboarding.interface'
import VirtualRealityImage from '@visualizar/common/assets/virtual-reality.png'
import { colors } from '@visualizar/common/lib/colors'
import { i18n } from '@visualizar/common/lib/internacionalization'

export const OnboardingStepOne: FC<StepOneProps> = ({ handleNextStep }) => {
	const { width } = useWindowDimensions()

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.purple.darkerPurple }}>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					paddingTop: 50,
				}}>
				<Image source={VirtualRealityImage} />
			</View>

			<View
				style={{
					width,
					marginTop: 100,
					justifyContent: 'center',
					alignItems: 'center',
					paddingHorizontal: 5,
				}}>
				<Text
					style={{
						paddingHorizontal: 10,
						fontSize: 20,
						fontWeight: 'bold',
						color: colors.primary.darkWhite,
					}}>
					{i18n.t('auth.onboarding.title')}
				</Text>
				<Text
					style={{
						fontSize: 14,
						color: colors.primary.gray,
						paddingHorizontal: 15,
						marginVertical: 15,
					}}>
					{i18n.t('auth.onboarding.subtitle')}
				</Text>
			</View>
			<View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
				<OnboardingButton onPress={() => handleNextStep()} />
			</View>
		</SafeAreaView>
	)
}
