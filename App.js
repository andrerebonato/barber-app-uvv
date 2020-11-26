import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import { ThemeProvider } from 'styled-components/native';
import { ThemeProvider as RNEThemeProvider } from 'react-native-elements';
import { barberTheme } from './src/theme/theme';
import './src/configs/statusBar';
import MainNavigation from './src/navigation/index';
import * as Font from "expo-font";

require("intl");
require("intl/locale-data/jsonp/pt-BR");

export default function App() {
   
    const fetchFonts = async () => {
        await Font.loadAsync({
            'Nunito-Light': require('./src/assets/fonts/Nunito-Light.ttf'),
            'Nunito-Regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
            'Nunito-Bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
            'Nunito-SemiBold': require('./src/assets/fonts/Nunito-SemiBold.ttf'),
        })
    }

    useEffect(() => {
        fetchFonts();
    }, []);

    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RNEThemeProvider>
            <ThemeProvider theme={barberTheme}>
                <MainNavigation />
            </ThemeProvider>
            </RNEThemeProvider>
        </PersistGate>
        </Provider>
    );
};
