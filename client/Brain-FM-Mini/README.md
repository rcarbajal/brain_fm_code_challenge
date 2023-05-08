# Mini Brain.fm Client

## Local setup

### 1. Install prerequisites
- Install [node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/)
- Install node packages by opening a command-line terminal and navigating to the `client/Brain-FM-Mini` folder. Run the following command to install all project requirements:
```bash
npm install
```
### 2. Environment configuration
Copy the `.env.example` file to `.env`. Update the containing environment variables as needed. The available variables are as follows:<br /><br />

`API_URL`: URI Location of the backend API service. By default this should be set to `http://localhost:3000` and will point to the default startup location of the provided API. Should you need to use an external device to run the app using localhost, feel free to set it to the IP address of your local computer if the device and the the computer are on the same network. Otherwise, use a tunneling service such as [ngrok](https://ngrok.com/) to provide the necessary connection.<br /><br />

`DEFAULT_TIMEOUT`: Default timeout time in milliseconds for requests made to the API service. By default, this timeout is set to 30 seconds.

### 3. Run the app
**NOTE**: This step requires either a simulator/emulator or a physical device to run the app.<br /><br />

Open a command-line terminal and navigate to the `client/Brain-FM-Mini` folder. Run the following command to start the Metro server:
```bash
npm run start
```
If running in the iOS Simulator or an Android emulator, press `i` or `a` respectively to open the application on the proper platform.<br /><br />
If running on a device, you will need to install the Expo Go app on your device found on the platform's app store.<br />
Apple: [https://apps.apple.com/us/app/expo-go/id982107779](https://apps.apple.com/us/app/expo-go/id982107779)<br />
Google: [https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US)<br /><br />

Use the Expo Go app on your device to scan the barcode displayed in the Metro server menu to run the application.