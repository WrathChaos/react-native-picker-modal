import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableHighlight,
} from "react-native";
import Modal from "react-native-modal";
import ActionButton from "./components/action-button/ActionButton";
import Divider from "./components/divider/Divider";
/**
 * ? Local Imports
 */
import styles from "./PickerModal.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IPickerModalProps {
  style?: CustomStyleProp;
  data: string[];
  TouchableComponent?: any;
  isVisible: boolean;
  onPress: (selectedItem: string) => void;
  onCancelPress: () => void;
}

const PickerModal: React.FC<IPickerModalProps> = ({
  style,
  data,
  onPress,
  isVisible,
  TouchableComponent = TouchableHighlight,
  onCancelPress,
  ...rest
}) => {
  const Title = () => (
    <View style={styles.titleTextContainer}>
      <Text style={styles.titleTextStyle}>
        You can either take a picture or select one from your album.
      </Text>
    </View>
  );

  const CancelButton = () => (
    <TouchableComponent
      underlayColor="rgba(0,0,0,0.7)"
      style={styles.cancelButtonStyle}
      onPress={onCancelPress}
    >
      <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
    </TouchableComponent>
  );

  const Picker = () => (
    <View style={[styles.mainContent, style]}>
      <Title />
      <Divider />
      {data.map((item: string, index: number) => (
        <ActionButton
          key={index}
          buttonText={item}
          TouchableComponent={TouchableComponent}
          isLastItem={index === data.length - 1}
          onPress={() => onPress && onPress(item)}
        />
      ))}
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      {...rest}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View style={styles.container}>
        <Picker />
        <CancelButton />
      </View>
    </Modal>
  );
};

export default PickerModal;
