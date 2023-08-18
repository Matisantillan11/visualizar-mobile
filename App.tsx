import { AuthModule } from '@visualizar/auth/auth.module'
import { ThemeProvider } from 'styled-components/native'
import { colors } from '@visualizar/common/lib/colors'

export default function App() {
	return (
		<ThemeProvider theme={colors}>
			<AuthModule />
		</ThemeProvider>
	)
}
