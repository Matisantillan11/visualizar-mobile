import { AuthModule } from '@visualizar/auth/auth.module'
import { AuthRootParamsList } from './types/auth-stack'
import { ForgotPasswordModule } from '@visualizar/forgot-password/forgot-password.module'
import { HeaderBackButton } from '../ui/header/header-back-button'
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
					headerLeft: () => <HeaderBackButton />,
					headerTintColor: colors.primary.white,
					headerStyle: { backgroundColor: colors.black.black900 },
					contentStyle: {
						backgroundColor: colors.black.black900,
					},
				}}>
				<Stack.Screen options={{ headerShown: false }} name='Onboarding' component={OnboardingModule} />
				<Stack.Screen options={{ headerShown: false }} name='Login' component={AuthModule} />
				<Stack.Screen
					options={{
						headerTitle: '',
					}}
					name='ForgotPassword'
					component={ForgotPasswordModule}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
