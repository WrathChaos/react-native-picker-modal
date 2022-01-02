import React from "react";
import {
  Text,
  Alert,
  StatusBar,
  Dimensions,
  SafeAreaView,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import ImagePickerModal from "./lib/PickerModal";

const { width: ScreenWidth } = Dimensions.get("screen");

const mockData = ["Take a photo", "Select from album"];

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [isVisible, setVisible] = React.useState<boolean>(false);

  const OpenPickerButton = () => (
    <TouchableOpacity
      style={{
        height: 50,
        width: ScreenWidth * 0.9,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#059",
      }}
      onPress={() => {
        setVisible(true);
      }}
    >
      <Text style={{ color: "#fff" }}>Open Image Picker Modal</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <OpenPickerButton />
      <ImagePickerModal
        title="You can either take a picture or select one from your album."
        isVisible={isVisible}
        data={mockData}
        onPress={(selectedItem: string) => {
          Alert.alert("Alert", selectedItem);
        }}
        onCancelPress={() => {
          setVisible(false);
        }}
        onBackdropPress={() => {
          setVisible(false);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
