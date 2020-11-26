import React from 'react';

import { Button as NEButton } from 'react-native-elements';

import { barberTheme } from '../../theme/theme';
import { RFValue } from '../../utils/fontSize';

const Button = ({
    title,
    onPress,
    titleColor = barberTheme.colors.white,
    background = barberTheme.colors.primary,
    loading = false,
    disabled = false,
    mt = 10
}) => (
    <NEButton
        loading={loading}
        disabled={disabled}
        onPress={onPress}
        buttonStyle={{
            height: RFValue(50),
            backgroundColor: background,
            borderRadius: RFValue(10)
        }}
        containerStyle={{
            width: "100%",
            marginTop: mt,
        }}
        titleStyle={{
            fontSize: RFValue(18),
            fontFamily: barberTheme.fonts.bold,
            fontWeight: "bold",
            color: titleColor
        }}
        title={title}
    >
    </NEButton>
);

export default Button;
