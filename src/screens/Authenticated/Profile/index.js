import React, { useEffect, useCallback } from 'react';

import {
    View,
    ScrollView,
    Text,
    Alert
} from 'react-native';

import { 
    Avatar
} from 'react-native-elements';

import {
    useDispatch, 
    useSelector
} from 'react-redux';

import styles from './styles';
import Header from '../../../components/Header/index';
import ProfileItem from '../../../components/ProfileItem/index';
import ProfileAddressCard from '../../../components/ProfileAddressCard/index';

import { getAll } from '../../../store/actions/contractAddress/index';
import { getUserData } from '../../../store/actions/user/index';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    
    const { cliente } = useSelector((s) => s.user);
    const { addresses, loading } = useSelector((s) => s.contractAddress);


    const fetchUser = useCallback(() => {
        dispatch(
            getUserData("yurysousa@icloud.com", (err, res) => {
                if(err) {
                    Alert.alert("Ocorreu um erro", String(err));
                }
            })
        )
    }, [cliente]);

    const fetchAddresses = useCallback(() => {
        dispatch(
            getAll("14466", (err, res) => {
                if(err) {
                    console.log('err', err)
                    Alert.alert("Ocorreu um erro", String(err));
                }
            })
        );

    }, [cliente]);

    useEffect(() => {
        fetchAddresses();
        fetchUser();
    }, []);

    return (
        <ScrollView style={styles.root}>
            <Header />
            <View style={styles.avatarContainer}>
                <Avatar 
                    size={84}
                    containerStyle={styles.avatar}
                    rounded
                    source={{
                        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />
                <Text style={styles.name}>
                    {cliente.Nome}
                </Text>
            </View>
            <View style={styles.personalDataContainer}>
                {
                    [
                        {
                            label: "CPF",
                            value: cliente.CNPJ_CNPF
                        },
                        {
                            label: "Email",
                            value: cliente.Email
                        },
                        {
                            label: "Telefone",
                            value: cliente.TelCelular
                        },
                        {
                            label: "Endereco de cadastro",
                            value: `${cliente.Endereco}, ${cliente.Numero} - ${cliente.Cidade} - ${cliente.UF}`
                        }
                    ].map((info, i) => (
                        <ProfileItem key={i} label={info.label} value={info.value} />
                    ))
                }
            </View>

            <View style={styles.addressesContainer}>
                <Text style={styles.label}>
                    Enderecos dos meus contratos
                </Text>

                {addresses && addresses.map((a, idx) => (
                    <ProfileAddressCard 
                        key={idx}
                        name={'Sem propriedade'}
                        street={a.Endereco}
                        number={a.Numero}
                        state={a.UF}
                        city={a.Cidade}
                        neighborhood={a.Bairro}
                        contractNumber={a.Contrato}
                    />
                ))}
            </View>
            
            <View style={styles.options}>
                {[
                    {
                        label: "Termos de uso",
                        onPress: () => {}
                    },
                    {
                        label: "Politicas do app",
                        onPress: () => {}
                    },
                    {
                        label: "Alterar senha",
                        onPress: () => {}
                    },
                    {
                        label: "Sobre",
                        onPress: () => {}
                    }
                ].map((o,i) => (
                    <TouchableOpacity key={i} onPress={o.onPress}>
                        <Text style={styles.option}>{o.label}</Text>
                    </TouchableOpacity>
                ))}
                
            </View>

            <TouchableOpacity style={styles.logoutContainer}>
                <Text style={styles.logout}>
                    Sair do aplicativo
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Profile;