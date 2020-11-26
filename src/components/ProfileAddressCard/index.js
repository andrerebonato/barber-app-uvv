import React from 'react';

import {
    View,
    Text
} from 'react-native';

import styles from './styles';

const ProfileAddressCard = ({ 
    street, contractNumber, name,
    number, neighborhood, city, state
}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.contract}>Contrato nº {contractNumber}</Text>
            <Text style={styles.address}>
                {street}, {number} - {neighborhood}, {city} - {state}
            </Text>
        </View>
    )
}

export default ProfileAddressCard;