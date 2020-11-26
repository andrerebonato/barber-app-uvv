import { StyleSheet } from 'react-native';

import { barberTheme } from '../../../theme/theme';
import { RFValue } from '../../../utils/fontSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: barberTheme.colors.white,
    },
    logo: {
        marginTop: RFValue(150),
        alignSelf: "center",
        height: RFValue(100),
        width: RFValue(180),
        marginBottom: RFValue(30)
    },
    inputContainer: {
        width: "100%",
        marginTop: RFValue(10),
    },
    forgotContainer: {
        flex: 0,
        marginTop: RFValue(15),
        marginBottom: RFValue(10),
        alignItems: "flex-end"
    },
    forgotText: {
        textAlign: "right",
        marginRight: RFValue(35),
        color: barberTheme.colors.primary,
        fontFamily: barberTheme.fonts.bold,
        fontWeight: "bold",
        fontSize: RFValue(14),
        borderBottomColor: barberTheme.colors.primary,
        borderBottomWidth: 1,
    },
    buttonContainer: {
        flex: 1,
        marginTop: RFValue(20),
        marginLeft: RFValue(35),
        marginRight: RFValue(35),
        alignItems: "center",
    },
});

export default styles;
