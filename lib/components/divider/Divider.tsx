import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Divider.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IDividerProps {
  style?: CustomStyleProp;
}

const Divider: React.FC<IDividerProps> = ({ style }) => {
  return <View style={[styles.dividerStyle, style]} />;
};

export default Divider;
