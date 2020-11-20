import { Platform, StatusBar } from 'react-native';

const OS = Platform.OS;

if (OS === 'android') {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('#fff', true);
    StatusBar.setBarStyle('dark-content', true);
}

if (OS === 'ios') {
    // StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('dark-content', true);
}
