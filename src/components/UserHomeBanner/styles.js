import { StyleSheet } from "react-native";

import { barberTheme } from '../../theme/theme';
import { RFValue } from "../../utils/fontSize";

const styles = StyleSheet.create({
    root: {
        width: "100%",
        backgroundColor: "#F0F0F0",
        height: RFValue(100),
        elevation: 2,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    name: {
        marginTop: RFValue(25),
        fontSize: RFValue(18),
        textAlign: "left",
        fontWeight: "bold",
        color: barberTheme.colors.secondary,
        fontFamily: barberTheme.fonts.bold,
    },
    cpf: {
        color: barberTheme.colors.primary,
        fontSize: RFValue(14),
        fontFamily: barberTheme.fonts.regular,
    },
    content: {
        flex: 1,
        alignItems: "flex-start",
    },
    avatar: {
        alignSelf: "center", 
        margin: RFValue(15)
    },
    vertIcon: {
        marginRight: 30,
        flexDirection: "column", 
        justifyContent: "center" 
    }
});

export default styles;
