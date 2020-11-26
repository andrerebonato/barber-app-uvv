import { StyleSheet } from 'react-native';

import { barberTheme } from '../../theme/theme';
import { RFValue } from '../../utils/fontSize';

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FAFAFA",
        marginTop: RFValue(10),
        padding: RFValue(10),
        minHeight: RFValue(50),
        borderRadius: 5,
        alignSelf: "stretch"
    },
    name: {
        fontSize: RFValue(18),
        fontFamily: barberTheme.fonts.semibold,
        color: barberTheme.colors.secondary,
        textAlign: "left"
    },
    contract: {
        fontSize: RFValue(14),
        fontFamily: barberTheme.fonts.regular,
        textAlign: "left",
        color: barberTheme.colors.primary,
    },
    address: {
        fontSize: RFValue(16),
        fontFamily: barberTheme.fonts.regular,
        color: barberTheme.colors.secondary,
        textAlign: "left"
    }
});

export default styles;