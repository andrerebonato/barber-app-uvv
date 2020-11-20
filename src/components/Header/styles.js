import { StyleSheet } from "react-native";

import { RFValue } from "../../utils/fontSize";
import { barberTheme } from "../../theme/theme";
import configs from "../../configuration/index";

const styles = StyleSheet.create({
    root: {
        padding: 6,
        paddingTop: 16,
        backgroundColor: barberTheme.colors.white
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    item: {
        padding: 8,
        marginTop: 24,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        alignSelf: "center",
        height: 45,
        width: 80,
        marginTop: 26
    }
});

export default styles;
