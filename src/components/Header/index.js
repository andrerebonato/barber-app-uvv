import React from 'react';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    DrawerActions,
    useNavigation
} from "@react-navigation/native";

import { MaterialIcons } from '@expo/vector-icons';

import { barberTheme } from "../../theme/theme";
import configs from "../../configuration/index";
import styles from "./styles";

const Header = () => {
    const navigation = useNavigation();

    const handleOpenDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

    return (
        <View style={styles.root}>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={handleOpenDrawer}
                    style={styles.item}
                >
                    <MaterialIcons name="menu" size={34} color={barberTheme.colors.secondary} />
                </TouchableOpacity>
                <Image style={styles.image} source={configs.images.logo} />
                <TouchableOpacity style={styles.item}>
                    <MaterialIcons name="notifications-none" size={34} color={barberTheme.colors.secondary} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Header;
