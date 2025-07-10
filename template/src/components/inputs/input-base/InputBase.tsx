import React, { forwardRef, ReactNode } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Text,
} from 'react-native';
import { app_colors, app_font_family } from '@/config/theme';
import inputBaseStyles from './InputBase.styles';

interface InputBaseProps extends TextInputProps {
  // Props additionnels
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  errorMessage?: string;
  onRightIconPress?: () => void;
  isPassword?: boolean;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  hint?: string;
  containerStyle?: object;
  inputContainerStyle?: object;
  inputStyle?: object;
  placeholderFontFamily?: string;
  label?: string;
  labelStyle?: object;
}

const InputBase = forwardRef<TextInput, InputBaseProps>((props, ref) => {
  const {
    rightIcon,
    leftIcon,
    errorMessage,
    onRightIconPress,
    isPassword,
    showPassword,
    togglePasswordVisibility,
    hint,
    containerStyle,
    inputContainerStyle,
    inputStyle,
    placeholderTextColor = app_colors.greyLabel,
    placeholderFontFamily = app_font_family.UrbanistRegular,
    label,
    labelStyle,
    ...restProps
  } = props;

  return (
    <View style={[inputBaseStyles.container, containerStyle]}>
      {label && (
        <Text style={[inputBaseStyles.labelText, labelStyle]}>{label}</Text>
      )}
      <View
        style={[
          inputBaseStyles.inputContainer,
          errorMessage ? inputBaseStyles.inputError : {},
          inputContainerStyle,
        ]}
      >
        {leftIcon && <View style={inputBaseStyles.leftIcon}>{leftIcon}</View>}

        <TextInput
          ref={ref}
          style={[
            inputBaseStyles.input,
            leftIcon ? inputBaseStyles.inputWithLeftIcon : {},
            rightIcon || isPassword ? inputBaseStyles.inputWithRightIcon : {},
            { fontFamily: placeholderFontFamily },
            inputStyle,
          ]}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={isPassword && !showPassword}
          {...restProps}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={inputBaseStyles.rightIcon}
            activeOpacity={0.7}
          >
            {rightIcon}
          </TouchableOpacity>
        )}

        {rightIcon && !isPassword && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={inputBaseStyles.rightIcon}
            activeOpacity={0.7}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {errorMessage && (
        <Text style={inputBaseStyles.errorText}>{errorMessage}</Text>
      )}

      {hint && <Text style={inputBaseStyles.hintText}>{hint}</Text>}
    </View>
  );
});

export default InputBase;
