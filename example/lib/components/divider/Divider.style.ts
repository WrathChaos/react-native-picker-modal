import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  dividerStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  dividerStyle: {
    height: 1,
    width: "100%",
    backgroundColor: "#3b3b3b",
  },
});
