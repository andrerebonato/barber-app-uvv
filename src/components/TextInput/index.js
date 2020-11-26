import React, { ReactNode, useState } from "react";
import {
  View,
  TextInput as TextInputRN,
  TextInputProps,
  TextStyle,
  ViewStyle,
  Picker,
  Platform,
  ActivityIndicator,
  TextProps,
  GestureResponderEvent,
  Text
} from "react-native";


import {
  TextInputMask,
  TextInputMaskTypeProp,
  TextInputMaskOptionProp,
} from "react-native-masked-text";

import { Icon } from "react-native-elements";

import styles from "./styles";

const renderIcon = (
  name,
  right,
  color,
  onPress,
  size = 24
) => {
  if (!name) return null;

  return (
    <Icon
      size={size}
      name={name}
      color={color}
      style={right ? styles.iconRight0Style : styles.iconLeftStyle}
      onPress={onPress}
    />
  );
};

const renderLoading = () => (
  <ActivityIndicator
    size="small"
    color="#EE3946"
    style={styles.iconRightStyle}
  />
);

const TextInput = ({
  id,
  label,
  leftIcon,
  password = false,
  leftIconColor,
  rightIcon,
  rightComponent,
  rightIconColor,
  rightIconSize = 24,
  labelStyle,
  inputContainerStyle,
  inputOuterContainerStyle,
  inputStyle,
  onRightIconPress,
  rootStyle,
  documentLoading = null,
  zipCodeLoading = null,
  handleChange,
  select,
  data,
  value,
  noneSelectedText,
  errors,
  errorStyle,
  enableMask,
  type,
  loading,
  options,
  onClear,
  showClearButton,
  webProps,
  labelProps = {},
  iconType = null,
  ...rest
}) => {
  const onChangeText = (v) => {
    handleChange && handleChange(id, v);
  };

  const [isFocused, setIsFocused] = useState(false);

  const hasError = () => Boolean(errors && errors[id]);

  const renderError = () => {
    if (hasError())
      return (
        <Text style={[styles.errorStyle, errorStyle]}>
          {errors && errors[id]}
        </Text>
      );

    return null;
  };

  if (showClearButton && value) {
    rightIcon = "close";
    rightIconColor = "#E5E5E5";
    rightIconSize = 20;
    onRightIconPress = () => {
      onChangeText("");
      onClear && onClear();
    };
  }

  let labelComponent = label;

    if (typeof label === "string") {
        labelComponent = (
            <>
                <Text
                    style={[
                        label.length > 15 ? { width: 180 } : { width: 100 },
                        styles.labelStyle,
                        labelStyle,
                    ]}
                    {...labelProps}
                >
                    {label}
                </Text>
                {documentLoading ? (
                    <ActivityIndicator
                        size="small"
                        color="#3C80FF"
                        style={{ marginLeft: 4 }}
                    />
                ) : null}
                {zipCodeLoading ? (
                    <ActivityIndicator
                        size="small"
                        color="#3C80FF"
                        style={{ marginLeft: 4 }}
                    />
                ) : null}
            </>
        );
    }

  const Input =
    enableMask && Platform.OS !== "web" ? (
      <View>
        <TextInputMask
          type={type}
          options={options}
          nativeID={id}
          style={[
            styles.inputStyle,
            inputStyle,
          ]}
          onChangeText={onChangeText}
          value={value}
          allowFontScaling
          maxFontSizeMultiplier={1.8}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={password ? true : false}
          {...rest}
        />
      </View>
    ) : (
        <TextInputRN
          nativeID={id}
          style={[
            styles.inputStyle,
            inputStyle,
          ]}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={password ? true : false}
          allowFontScaling
          maxFontSizeMultiplier={1.8}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
          {...Platform.select({ web: webProps, default: {} })}
        />
    );

  return (
    <View
      style={[
        styles.root,
        label ? {} : { height: hasError() ? 75 : 55 },
        rootStyle,
      ]}
    >
      {labelComponent}

      <View
        style={{ 
          flex: 1,
          flexDirection: 'row',
          marginLeft: 30,
          backgroundColor: '#fff'
        }}  
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
        {renderIcon(leftIcon, false, leftIconColor)}
        {Input}
        
        </View>
        
        {loading
          ? renderLoading()
          : rightComponent
          ? rightComponent
          : renderIcon(
              rightIcon,
              true,
              rightIconColor,
              onRightIconPress,
              rightIconSize
            )}
            
      </View>

      {renderError()}
    </View>
  );
};

export default TextInput;
