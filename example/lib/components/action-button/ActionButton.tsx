import * as React from "react";
import { StyleProp, Text, ViewStyle, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles, { _dynamicBorderStyle } from "./ActionButton.style";
import Divider from "../divider/Divider";

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface IActionButtonProps {
  actionButtonStyle?: CustomViewStyleProp;
  dividerStyle?: CustomViewStyleProp;
  actionButtonTextStyle?: CustomTextStyleProp;
  text?: string;
  TouchableComponent?: any;
  isLastItem?: boolean;
  onActionPress?: () => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({
  text,
  isLastItem = false,
  dividerStyle,
  actionButtonStyle,
  actionButtonTextStyle,
  TouchableComponent,
  onActionPress,
}) => {
  return (
    <>
      <TouchableComponent
        underlayColor="rgba(0,0,0,0.3)"
        style={[
          styles.actionButtonStyle,
          actionButtonStyle,
          _dynamicBorderStyle(isLastItem),
        ]}
        onPress={onActionPress}
      >
        <Text style={[styles.actionButtonTextStyle, actionButtonTextStyle]}>
          {text}
        </Text>
      </TouchableComponent>
      {!isLastItem && <Divider style={dividerStyle} />}
    </>
  );
};

export default ActionButton;
