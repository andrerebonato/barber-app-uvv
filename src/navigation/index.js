import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
    useSelector 
} from 'react-redux';

import Login from '../screens/Auth/Login/index';
//import ForgotPassword from '../screens/Auth/ForgotPassword/index';
//import ForgotPasswordOk from '../screens/Auth/ForgotPasswordOk/index';
import Menu from '../screens/Authenticated/Menu/index';
import Home from '../screens/Authenticated/Home/index';
import Profile from '../screens/Authenticated/Profile/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => (
    <Drawer.Navigator
        drawerContentOptions={{
            activeBackgroundColor: "transparent",
            inactiveTintColor: "white",
            activeTintColor: "white"
        }}
        drawerStyle={{ width: "100%" }}
        initialRouteName="Home"
        drawerContent={props => <Menu {...props} />}
    >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
)

const MenuDrawer = ({ navigation }) => {
    return (
        <Stack.Navigator headerMode="none" mode="modal" initialRouteName="Home">
           <Stack.Screen name="Home" component={DrawerStack} />
        </Stack.Navigator>
    )
}

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Login"} headerMode="none" mode="modal">
            <Stack.Screen name={"Login"} component={Login} />
            {/*<Stack.Screen name={"ForgotPassword"} component={ForgotPassword} />
            <Stack.Screen name={"ForgotPasswordOk"} component={ForgotPasswordOk} />*/}
        </Stack.Navigator>
    )
}

function MainNavigation() {
    const { token, user } = useSelector((s) => s.auth);

    if(token && user) {
        return (
            <NavigationContainer>
                <MenuDrawer />
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
};

export default MainNavigation;
