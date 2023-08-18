import { Image, SafeAreaView, Text, View, useWindowDimensions } from 'react-native'

import { OnboardingButton } from '../onboarding/button/onboarding-button'
import VirtualRealityImage from '@visualizar/common/assets/virtual-reality.png'
import { colors } from '@visualizar/common/lib/colors'

export const OnboardingStepOne = () => {
	const { width, height } = useWindowDimensions()

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.purple.darkerPurple,
			}}>
			<SafeAreaView style={{ flex: 1 }}>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Image source={VirtualRealityImage} />
				</View>

				<View
					style={{
						width,
						marginTop: 150,
						justifyContent: 'center',
						alignItems: 'center',
						paddingHorizontal: 10,
					}}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							color: colors.primary.darkWhite,
						}}>
						Descubre el MUNDO de los libros a través REALIDAD AUMENTADA
					</Text>
					<Text
						style={{
							fontSize: 14,
							color: colors.primary.gray,
							paddingHorizontal: 15,
							marginVertical: 15,
						}}>
						Leer no tiene porque ser aburrido. Con la REALIDAD AUMENTADA ahora podes divertirte y aprender al mismo
						tiempo. Unite!
					</Text>
				</View>
				<View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
					<OnboardingButton />
				</View>
			</SafeAreaView>
		</View>
	)
}
