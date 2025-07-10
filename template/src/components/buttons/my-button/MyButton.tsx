import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { app_colors } from '@/config/theme';
import { myButtonStyles } from './MyButton.styles';

interface MyButtonProps {
  text: string;
  isOutlined?: boolean;
  onPress: () => void;
  icon?: ImageSourcePropType | undefined;
  iconRight?: ImageSourcePropType | undefined;
  isOutlined_orange?: boolean;
  bgColor?: string;
  disableButton?: boolean;
  textColor?: string;
}

const MyButton = ({
  text,
  isOutlined,
  onPress,
  icon,
  iconRight,
  isOutlined_orange,
  bgColor,
  disableButton,
  textColor = app_colors.white,
}: MyButtonProps) => {
  return (
    <TouchableHighlight
      underlayColor={app_colors.dark}
      disabled={disableButton}
      onPress={onPress}
      style={[
        myButtonStyles.containBtn,
        {
          backgroundColor: bgColor
            ? bgColor
            : isOutlined
            ? app_colors.white
            : isOutlined_orange
            ? app_colors.primary
            : app_colors.primary,
          borderColor: isOutlined
            ? isOutlined_orange
              ? app_colors.primary
              : app_colors.light
            : 'transparent',
          borderWidth: isOutlined ? 1 : 0,
        },
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        {icon && (
          <Image
            source={icon}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        )}
        <Text
          style={[
            myButtonStyles.texteBouton,
            {
              color: isOutlined
                ? isOutlined_orange
                  ? app_colors.primary
                  : textColor
                : textColor,
            },
          ]}
        >
          {text}
        </Text>
        {iconRight && (
          <Image
            source={iconRight}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default MyButton;
