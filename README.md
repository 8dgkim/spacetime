# spacetime
- personal superapp project

## TODO
- apply features on each screen
- request Android permissions
- hide status bar


### Journal
- set stack navigator
- set edit entry screen
   - decide text editor features
- learn local storage management
- decide file type: md
- decide metadata to store
- passcode protection for entries
- sync option; but where?

### Direction
- change to bold text
- fix negative time distance
- fix empty TextInput behavior after some input is erased

### Sandclock
- design on Figma
- set behaviors and logic

### Space
- tbd


## dev log

- 2024-03-13
   - branch: screen-journal
      - request Android permissions
      - set up rough UI (box creation)
      - set nested navigator; minor style changes
- 2024-03-12
   - completed Navigation; added icons; set backBehavior; modify readme
   - changed app icon(s)
   - src/screens/Time.tsx: display time; finished
   - src/screens/Direction.tsx: display time distance; finished
- 2024-03-11: initial commit; created react-native app; initial bottomTabNavigator



## notes


### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

### Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Resources

- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).
- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
