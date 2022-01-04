import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableHighlight,
  TextStyle,
} from "react-native";
import Modal from "react-native-modal";
/**
 * ? Local Imports
 */
import styles from "./PickerModal.style";
import Divider from "./components/divider/Divider";
import ActionButton, {
  IActionButtonProps,
} from "./components/action-button/ActionButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface IPickerModalProps extends IActionButtonProps {
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  cancelButtonStyle?: CustomStyleProp;
  titleTextContainer?: CustomStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  cancelButtonTextStyle?: CustomTextStyleProp;
  data: string[];
  title: string;
  isVisible: boolean;
  TouchableComponent?: any;
  cancelButtonUnderlayColor?: string;
  onPress: (selectedItem: string) => void;
  onCancelPress: () => void;
  onBackdropPress?: () => void;
}

const PickerModal: React.FC<IPickerModalProps> = ({
  style,
  data,
  title,
  onPress,
  isVisible,
  dividerStyle,
  titleTextStyle,
  cancelButtonStyle,
  titleTextContainer,
  cancelButtonTextStyle,
  cancelButtonUnderlayColor = "rgba(200,200,200,0.1)",
  TouchableComponent = TouchableHighlight,
  onBackdropPress,
  onCancelPress,
  ...rest
}) => {
  const Title = () => (
    <View style={[styles.titleTextContainer, titleTextContainer]}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
    </View>
  );

  const CancelButton = () => (
    <TouchableComponent
      underlayColor={cancelButtonUnderlayColor}
      style={[styles.cancelButtonStyle, cancelButtonStyle]}
      onPress={onCancelPress}
    >
      <Text style={[styles.cancelButtonTextStyle, cancelButtonTextStyle]}>
        Cancel
      </Text>
    </TouchableComponent>
  );

  const Picker = () => (
    <View style={[styles.mainContent, style]}>
      <Title />
      <Divider style={dividerStyle} />
      {data.map((item: string, index: number) => (
        <ActionButton
          key={index}
          TouchableComponent={TouchableComponent}
          isLastItem={index === data.length - 1}
          {...rest}
          text={item}
          onActionPress={() => onPress && onPress(item)}
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
      onBackdropPress={onBackdropPress}
    >
      <View style={styles.container}>
        <Picker />
        <CancelButton />
      </View>
    </Modal>
  );
};

export default PickerModal;
