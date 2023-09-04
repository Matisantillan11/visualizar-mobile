import 'react-native-gesture-handler'

import { QueryClient, QueryClientProvider } from 'react-query'

import { AuthStack } from '@visualizar/common/stacks/auth-stack'
import { ThemeProvider } from 'styled-components/native'
import Toast from 'react-native-toast-message'
import { colors } from '@visualizar/common/lib/colors'
import { firebaseConfig } from './firebaseConfig'
import { initializeApp } from 'firebase/app'

initializeApp(firebaseConfig)
const queryClient = new QueryClient()
export default function App() {
	return (
		<ThemeProvider theme={colors}>
			<QueryClientProvider client={queryClient}>
				<AuthStack />
			</QueryClientProvider>
			<Toast />
		</ThemeProvider>
	)
}
