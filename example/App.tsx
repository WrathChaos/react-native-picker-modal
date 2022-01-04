import React from "react";
import {
  Text,
  Alert,
  StatusBar,
  Dimensions,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import ImagePickerModal from "@freakycoder/react-native-picker-modal";
import useStateWithCallback from "@freakycoder/react-use-state-with-callback";

const { width: ScreenWidth } = Dimensions.get("screen");

const mockData = ["Take a photo", "Select from album"];
const mockTitle =
  "You can either take a picture or select one from your album.";

const dayMockData = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const mockDayTitle = "Select a day from the picker";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [isVisible, setVisible] = useStateWithCallback<boolean>(false);
  const [isDayModalVisible, setDayModalVisible] = useStateWithCallback<boolean>(
    false,
  );

  const OpenPickerButton = () => (
    <RNBounceable
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
      <Text style={{ color: "#fff" }}>Image Picker Modal</Text>
    </RNBounceable>
  );

  const OpenDayPickerButton = () => (
    <RNBounceable
      style={{
        height: 50,
        width: ScreenWidth * 0.9,
        borderRadius: 16,
        marginTop: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#26b463",
      }}
      onPress={() => {
        setDayModalVisible(true);
      }}
    >
      <Text style={{ color: "#fff" }}>Day Picker Modal</Text>
    </RNBounceable>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <OpenPickerButton />
      <OpenDayPickerButton />
      <ImagePickerModal
        title={mockTitle}
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
      <ImagePickerModal
        title={mockDayTitle}
        isVisible={isDayModalVisible}
        data={dayMockData}
        onPress={(selectedItem: string) => {
          Alert.alert("Alert", selectedItem);
        }}
        onCancelPress={() => {
          setDayModalVisible(false);
        }}
        onBackdropPress={() => {
          setDayModalVisible(false);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
