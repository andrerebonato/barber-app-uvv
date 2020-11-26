import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const ProfileItem = ({ label, value }) => {
    return (
        <View style={styles.dataContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ProfileItem;