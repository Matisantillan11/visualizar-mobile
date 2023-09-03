import 'react-native-gesture-handler'

import { AuthStack } from '@visualizar/common/stacks/auth-stack'
import { ThemeProvider } from 'styled-components/native'
import Toast from 'react-native-toast-message'
import { colors } from '@visualizar/common/lib/colors'
import { firebaseConfig } from './firebaseConfig'
import { initializeApp } from 'firebase/app'

initializeApp(firebaseConfig)

export default function App() {
	return (
		<ThemeProvider theme={colors}>
			<AuthStack />
			<Toast />
		</ThemeProvider>
	)
}
