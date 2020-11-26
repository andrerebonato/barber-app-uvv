import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StackActions, useNavigation, DrawerActions } from "@react-navigation/native";
import { 
    FontAwesome, 
    FontAwesome5, 
    MaterialIcons, 
    Feather, 
    MaterialCommunityIcons,
    Ionicons
} from '@expo/vector-icons';

import { RFValue } from '../../../utils/fontSize';
import { barberTheme } from '../../../theme/theme';
import  configs from '../../../configuration/index';

const Menu = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const closeMenu = () => navigation.dispatch(
        DrawerActions.closeDrawer()
    );

    return (
        <View style={styles.root}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.flex}>
                <View style={styles.flex}>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Image style={styles.image} source={configs.images.logo} />
                            <Ionicons onPress={closeMenu} style={styles.icon} name="ios-close" size={42} color={barberTheme.colors.secondary} />
                        </View>
                        <View style={styles.content}>
                            {[
                                {
                                    label: "Início",
                                    route: "Home",
                                    subRoute: "Home",
                                    icon: () => ( <FontAwesome name="home" size={RFValue(24)} color={barberTheme.colors.secondary} />)
                                },
                                {
                                    label: "Minha rede",
                                    route: "",
                                    subRoute: "",
                                    icon: () => ( <FontAwesome name="wifi" size={RFValue(22)} color={barberTheme.colors.secondary} />)
                                },
                                {
                                    label: "Meus contratos",
                                    route: "",
                                    subRoute: "",
                                    icon: () => ( <MaterialCommunityIcons name="file-document" size={RFValue(24)} color={barberTheme.colors.secondary} />)
                                },
                                {
                                    label: "Perfil",
                                    route: "Profile",
                                    subRoute: "",
                                    icon: () => ( <Feather name="user" size={RFValue(24)} color={barberTheme.colors.secondary} />)
                                },
                                {
                                    label: "Notificações",
                                    route: "",
                                    subRoute: "",
                                    icon: () => ( <MaterialIcons name="notifications-none" size={RFValue(24)} color={barberTheme.colors.secondary} />)
                                },
                                {
                                    label: "Atendimento online",
                                    route: "",
                                    subRoute: "",
                                    icon: () => ( <FontAwesome5 name="headset" size={RFValue(22)} color={barberTheme.colors.secondary} />)
                                }
                            ].map(c => (
                                <DrawerItem
                                    icon={c.icon}
                                    key={c.label}
                                    label={c.label}
                                    labelStyle={styles.label}
                                    onPress={() =>
                                        props.navigation.navigate(c.route, { screen: c.subRoute })
                                    }
                                    activeBackgroundColor="transparent"
                                    activeTintColor="white"
                                    inactiveTintColor="white"
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: { backgroundColor: "#FFF", flex: 1 },
    flex: { flex: 1 },
    label: {
        fontFamily: barberTheme.fonts.semibold,
        fontSize: RFValue(16),
        fontWeight: "700",
        marginLeft: RFValue(-20),
        color: barberTheme.colors.primary
    },
    content: {
        marginLeft: RFValue(10)
    },
    image: { 
        width: RFValue(80), 
        marginTop: RFValue(30), 
        height: RFValue(45), 
        marginBottom: RFValue(30), 
        marginLeft: RFValue(30) 
    },
    icon: {
        marginTop: RFValue(20),
        justifyContent: "center",
        marginRight: RFValue(30)
    }
});


export default Menu;
