import {View, Text, TouchableOpacity} from 'react-native';
import ligthButtonStyles from './LigthButton.styles';

interface LigthButtonProps {
  handleLigthBtn: () => void;
  text: string;
  btnLigthText: string;
}

const LigthButton = ({
  handleLigthBtn,
  text,
  btnLigthText,
}: LigthButtonProps) => {
  return (
    <View style={ligthButtonStyles.bottomTextContainer}>
      <View style={ligthButtonStyles.textWrapper}>
        <Text style={ligthButtonStyles.bottomText}>{text} </Text>
        <TouchableOpacity onPress={handleLigthBtn}>
          <Text style={ligthButtonStyles.signupText}>{btnLigthText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LigthButton;
