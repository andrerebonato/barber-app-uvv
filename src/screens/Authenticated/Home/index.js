import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import styles from './styles';
import Header from '../../../components/Header/index';
import { barberTheme } from '../../../theme/theme';
import UserHomeBanner from '../../../components/UserHomeBanner/index';

const Home = ({ navigation }) => {

    return (
        <View style={styles.root}>
            <Header />
            <View style={styles.content}>
                <UserHomeBanner navigation={navigation} />
            </View>
        </View>
    )
}

export default Home;
