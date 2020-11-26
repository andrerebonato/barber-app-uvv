import { StyleSheet } from "react-native";

import { RFValue } from '../../../utils/fontSize';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "white"
    },
    content: {
        marginTop: RFValue(20)
    },
    userBanner: {
        width: "100%",
        backgroundColor: "#F0F0F0",
        height: RFValue(100),
        elevation: 2
    }
});

export default styles;
