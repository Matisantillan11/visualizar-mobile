import { AuthModule } from '@visualizar/auth/auth.module'
import { AuthRootParamsList } from './types/auth-stack.type'
import { NavigationContainer } from '@react-navigation/native'
import { OnboardingModule } from '@visualizar/auth/onboarding.module'
import { colors } from '../lib/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<AuthRootParamsList>()

export const AuthStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					headerTintColor: colors.primary.white,
					headerStyle: { backgroundColor: colors.black.black900 },
					contentStyle: {
						backgroundColor: colors.black.black900,
					},
				}}>
				<Stack.Screen options={{ headerShown: false }} name={'Onboarding'} component={OnboardingModule} />
				<Stack.Screen name={'Login'} component={AuthModule} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
