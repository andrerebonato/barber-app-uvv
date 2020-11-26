import { StyleSheet } from 'react-native';

import { barberTheme } from '../../theme/theme';
import { RFValue } from '../../utils/fontSize';

const styles = StyleSheet.create({
    dataContainer: {
        marginBottom: RFValue(10),
    },
    label: {
        fontFamily: barberTheme.fonts.regular,
        fontSize: RFValue(16),
        color: barberTheme.colors.green
    },
    value: {
        fontFamily: barberTheme.fonts.regular,
        fontSize: RFValue(16),
        color: barberTheme.colors.primary
    },
});

export default styles;