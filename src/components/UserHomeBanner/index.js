import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import {
    useSelector,
    useDispatch
} from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

import styles from './styles';
import configs from '../../configuration/index';
import { barberTheme } from '../../theme/theme';


const UserHomeBanner = ({ navigation }) => {
    const dispatch = useDispatch();

    const { user } = useSelector((s) => s.auth);

    console.log('usuario', user)

    const handleProfileRedirect = () => navigation.navigate(configs.screens.profile.name);

    return (
        <TouchableOpacity style={styles.root} onPress={handleProfileRedirect}>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Avatar
                        containerStyle={styles.avatar}
                        size={72}
                        rounded
                        source={{
                            uri: user?.avatar ? 
                                user?.avatar : 
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>
                        Olá, {user?.nome ? user.nome : 'Patrícia'}!
                    </Text>
                    <Text style={styles.cpf}>
                        CPF: {user?.cpf ? user.cpf : '111.222.333-54'}
                    </Text>
                </View>
                <View style={styles.vertIcon}>
                    <Ionicons name="ios-arrow-forward" size={24} color={barberTheme.colors.secondary} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UserHomeBanner;