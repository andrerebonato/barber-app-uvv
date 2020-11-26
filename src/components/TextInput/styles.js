import { StyleSheet } from "react-native";

import { RFValue } from "../../utils/fontSize";
import { barberTheme } from "../../theme/theme";

const styles = StyleSheet.create({
  root: {
    marginTop: 10
  },
  labelStyle: {
    backgroundColor: barberTheme.colors.primary,
    fontFamily: barberTheme.fonts.regular,
    textAlign: "center",
    paddingVertical: RFValue(5),
    marginBottom: RFValue(-10),
    marginLeft: RFValue(15),
    borderRadius: RFValue(2),
    fontSize: RFValue(14),
    zIndex: 1,
    color: "#fff",
  },
  inputStyle: {
    flex: 1,
    fontFamily: barberTheme.fonts.regular,
    borderTopRightRadius: RFValue(10),
    borderBottomRightRadius: RFValue(10),
    backgroundColor: "#F9F9F9",
    fontSize: RFValue(15),
    marginRight: RFValue(35),
    color: '#424242',
    marginBottom: 4
  },
  iconLeftStyle: {
    minWidth: RFValue(60),
    maxWidth: RFValue(60),
    padding: RFValue(10),
    height: 50,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: barberTheme.colors.primary,
    marginBottom: 10
  },
  iconRightStyle: {
    padding: RFValue(10),
    paddingLeft: 0,
  },
  inputContainerErrorStyle: {},
  errorStyle: {
    marginLeft: RFValue(35),
    color: "red",
    fontSize: RFValue(12),
  },
});

export default styles;
