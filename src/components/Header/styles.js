import { StyleSheet } from "react-native";

import { RFValue } from "../../utils/fontSize";
import { barberTheme } from "../../theme/theme";

const styles = StyleSheet.create({
    root: {
        padding: RFValue(6),
        paddingTop: RFValue(16),
        backgroundColor: barberTheme.colors.white
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    item: {
        padding: RFValue(8),
        marginTop: RFValue(24),
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        alignSelf: "center",
        height: RFValue(45),
        width: RFValue(80),
        marginTop: RFValue(26)
    }
});

export default styles;
