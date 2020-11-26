import { StyleSheet } from "react-native";

import { barberTheme } from '../../../theme/theme';
import { RFValue } from '../../../utils/fontSize';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: barberTheme.colors.white
    },
    avatarContainer: {
        marginTop: RFValue(20),
        justifyContent: "center",
        marginBottom: RFValue(40)
    },
    avatar: {
        alignSelf: "center", 
        margin: RFValue(15)
    },
    label: {
        fontFamily: barberTheme.fonts.regular,
        fontSize: RFValue(16),
        color: barberTheme.colors.green
    },
    name: {
        fontSize: RFValue(18),
        fontWeight: "bold",
        fontFamily: barberTheme.fonts.bold,
        color: barberTheme.colors.secondary,
        textAlign: "center",
    },
    personalDataContainer: {
        marginLeft: RFValue(20),
        flexDirection: "column"
    },
    addressesContainer: {
        flex: 1,
        marginLeft: RFValue(20),
        marginRight: RFValue(20),
        marginTop: RFValue(10)
    },
    options: {
        marginLeft: RFValue(30),
        marginTop: RFValue(30),
        marginBottom: RFValue(30)
    },
    option: {
        fontSize: RFValue(16),
        fontWeight: "600",
        color: barberTheme.colors.primary,
        fontFamily: barberTheme.fonts.regular,
        marginBottom: RFValue(7),
        textAlign: "left"
    },
    logoutContainer: {
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: RFValue(30)
    },
    logout: {
        fontSize: RFValue(16),
        fontWeight: "600",
        color: "red",
        fontFamily: barberTheme.fonts.regular,
        textAlign: "center"
    }
});

export default styles;