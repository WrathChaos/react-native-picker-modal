<img alt="React Native Picker Modal" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-picker-modal)

[![React Native Picker Modal](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-picker-modal)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-picker-modal.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-picker-modal)
[![npm](https://img.shields.io/npm/dt/react-native-picker-modal.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-picker-modal)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Picker Modal"
        src="assets/Screenshots/react-native-picker-modal.gif" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-picker-modal
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```ts
"react-native-modal": ">= 13.0.0"
```

# Usage

## Import

```tsx
import PickerModal from "@freakycoder/react-native-picker-modal";
```

## Fundamental Usage

```tsx
<ImagePickerModal
  title="You can either take a picture or select one from your album."
  isVisible={isVisible}
  data={["Take a photo", "Select from album"]}
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
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

```
npm i
```

```
react-native run-ios/android
```

should work of the `example` project.

# Configuration - Props

## <i>Fundamentals [Required]</i>

| Property      |   Type   |  Default  | Description                                                               |
| ------------- | :------: | :-------: | ------------------------------------------------------------------------- |
| title         |  string  | undefined | change the title                                                          |
| data          | string[] | undefined | set the picker modal dataset as string array                              |
| isVisible     | boolean  | undefined | change the picker modal visibility                                        |
| onPress       | function | undefined | set your own logic for the button functionality when it is pressed        |
| onCancelPress | function | undefined | set your own logic for the cancel button functionality when it is pressed |

## Customization (Optionals)

| Property                  |         Type          |        Default        | Description                                                                              |
| ------------------------- | :-------------------: | :-------------------: | ---------------------------------------------------------------------------------------- |
| onBackdropPress           |       function        |       undefined       | set your own logic for the backdrop of the modal functionality when it is pressed        |
| TouchableComponent        | `TouchableHightlight` |        default        | set your own component instead of default `react-native` `TouchableHightlight` component |
| style                     |       ViewStyle       |        default        | set or override the style object for the main container                                  |
| dividerStyle              |       ViewStyle       |        default        | set or override the style object for the divider style                                   |
| cancelButtonStyle         |       ViewStyle       |        default        | set or override the style object for the cancel button style                             |
| titleTextContainer        |       ViewStyle       |        default        | set or override the style object for the title text container                            |
| titleTextStyle            |       TextStyle       |        default        | set or override the style object for the title text style                                |
| cancelButtonTextStyle     |       ViewStyle       |        default        | set or override the style object for the cancel button text container                    |
| actionButtonStyle         |       ViewStyle       |        default        | set or override the style object for the action button container                         |
| actionButtonTextStyle     |       ViewStyle       |        default        | set or override the style object for the action button text                              |
| actionButtonUnderlayColor |        string         |    rgba(0,0,0,0.3)    | change the action button's underlay color                                                |
| cancelButtonUnderlayColor |        string         | rgba(200,200,200,0.1) | change the cancel button's underlay color                                                |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Picker Modal is available under the MIT license. See the LICENSE file for more info.

```

```
