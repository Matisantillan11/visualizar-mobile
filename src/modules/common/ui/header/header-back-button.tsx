import { Ionicons } from '@expo/vector-icons'
import { Paragraph } from '../Text/text.component'
import { TouchableOpacity } from 'react-native'
import { colors } from '@visualizar/common/lib/colors'
import { useNavigation } from '@react-navigation/native'
export const HeaderBackButton = () => {
	const navigation = useNavigation()
	return (
		<TouchableOpacity
			onPress={() => navigation.goBack()}
			style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -20 }}>
			<Ionicons name='chevron-back' size={24} color={colors.purple.darkPurple} />
			<Paragraph color={colors.purple.darkPurple}> Atrás </Paragraph>
		</TouchableOpacity>
	)
}
