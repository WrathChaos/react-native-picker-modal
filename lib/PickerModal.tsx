import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableHighlight,
  TextStyle,
} from "react-native";
import Modal, { ModalProps } from "react-native-modal";
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

export interface IPickerModalProps {
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  cancelButtonStyle?: CustomStyleProp;
  titleTextContainer?: CustomStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  cancelButtonTextStyle?: CustomTextStyleProp;
  modalProps?: ModalProps;
  actionButtonProps?: IActionButtonProps;
  data: string[] | number[];
  title: string;
  isVisible: boolean;
  TouchableComponent?: any;
  cancelButtonUnderlayColor?: string;
  onPress: (selectedItem: string | number, index: number) => void;
  onCancelPress: () => void;
  onBackdropPress: () => void;
}

const PickerModal: React.FC<IPickerModalProps> = ({
  style,
  data,
  title,
  onPress,
  isVisible,
  modalProps,
  dividerStyle,
  titleTextStyle,
  cancelButtonStyle,
  titleTextContainer,
  cancelButtonTextStyle,
  actionButtonProps,
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
      {data.map((item: string | number, index: number) => (
        <ActionButton
          key={index}
          TouchableComponent={TouchableComponent}
          isLastItem={index === data.length - 1}
          {...actionButtonProps}
          text={item}
          onActionPress={() => onPress && onPress(item, index)}
        />
      ))}
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      {...modalProps}
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
