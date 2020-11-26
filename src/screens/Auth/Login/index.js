import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Alert,
  SectionList
} from 'react-native';

import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scrollview';

import {
    submitLogin,
    setValue
} from '../../../store/actions/auth/index';

import OnLayout from '../../../components/OnLayout/index';
import Button from '../../../components/Button/index';
import styles from './styles';

import TextInput from '../../../components/TextInput/index';
import { barberTheme } from '../../../theme/theme';
import configs from '../../../configuration/index';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const { email, password, loading, errors } = useSelector((s) => s.auth);

    const handleChange = (id, value) => {
        if(errors[id]) dispatch(setValue({ errors: {...errors, [id]: "" }}));

        dispatch(setValue({
            [id]: value
        }));
    }

    const handleSubmit = () => {
        if(loading.login) return ;

        dispatch(
            submitLogin((err, res) => {
                if(err) {
                    Alert.alert("Atenção!", err);
                }
            })
        );
    };

  const handleForgotPassword = () => {
    if(loading.login) return null;

    dispatch(setValue({ errors: {} }));
    navigation.navigate(configs.screens.forgotPassword.name);
  }

  const handleRegister = () => loading.login ? null : navigation.navigate(configs.screens.register.name);

    return (
        <OnLayout>
            {({ width, height }) => (
                <KeyboardAwareScrollView style={styles.container}>
                    <Image style={styles.logo} source={configs.images.logo} />
                    <View style={styles.inputContainer}>
                        <TextInput
                            id="email"
                            value={email}
                            errors={errors}
                            handleChange={handleChange}
                            placeholder={'insira o e-mail'}
                            leftIcon="email"
                            leftIconSize={20}
                            leftIconColor={barberTheme.colors.white}
                        />
                        <TextInput
                            id="password"
                            errors={errors}
                            value={password}
                            handleChange={handleChange}
                            placeholder={'insira a senha'}
                            password
                            secureTextEntry={email.length > 1 ? true : false}
                            leftIcon="lock"
                            leftIconSize={20}
                            leftIconColor={barberTheme.colors.white}
                        />
                    </View>
                    <TouchableOpacity style={styles.forgotContainer}>
                        <Text style={styles.forgotText} onPress={handleForgotPassword}>
                            esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Button
                            title={'Entrar'}
                            onPress={handleSubmit}
                            loading={loading.login}
                        />
                        <Button
                            title={'Cadastrar'}
                            onPress={handleRegister}
                            background="transparent"
                            titleColor={barberTheme.colors.primary}
                        />
                    </View>
                </KeyboardAwareScrollView>
            )}
        </OnLayout>
    )
}

export default Login;
