# ChatSample
ChatSample is a project that makes use of BridgefySDK trough its React Native interface. This repo doesn't contain the interface, but you can find it [here](https://bitbucket.org/bridgefy/react-native-bridgefy-sdk).  
The project consists in a chat app that send messages to all nearby devices that are running the application too.  
This project is inspired by [Gifted chat](https://github.com/FaridSafi/react-native-gifted-chat).

## Requirements
In order to run the sample you need to cover the following requiriments:  

- `npm` installed.
- React Native minimum version `^0.45.1`.
- React version `^16.0.0-alpha.13`.


## Installation
Thsi project is preconfigured, if you want to create a project from scratch follow [these instructions](https://bitbucket.org/bridgefy/react-native-bridgefy-sdk). But anyway you will need to follow some steps in order to run the application.

1. Clone this repository
2. Move to the root directory
3. Install dependencies using `npm install`
4. Open App.js and replace the string `YOUR_API_KEY_HERE` with your actual API Key.

Before run the application take in account the following considerations/previous steps for every platform.

## Android 
[Bridgefy SDK](https://github.com/bridgefy/bridgefy-android-samples/blob/master/README.md) supports Android 5.0 (**API Level 21**) or higher and the following permission are required.

```java
android.permission.BLUETOOTH
android.permission.BLUETOOTH_ADMIN
android.permission.INTERNET
```
If you're targeting devices with Android  6.0 (**API Level 23**) or higher, either one of the following permissions is also required:

```java
android.permission.ACCESS_FINE_LOCATION
android.permission.ACCESS_COARSE_LOCATION
```
All this permissions are already added to the file `AndroidManifest.xml` in the sample project.  
Due to these required permissions, don't forget to grant access to location and bluetooth to the app in your device. ** The sample app won't show a dialog to request for it **, you will need to go to settings in your phone.  
To build and run the app in your device use the following command inside the rooth directory:  
```
react-native run-android
```
**Note:** Internet access is required during the first run in order to check for a valid license in our servers.

## iOS
To run the project you will need the following steps:  

1. Go to the official [Bridgefy iOS repository](https://bitbucket.org/bridgefy/bridgefy-ios-dist) to download the last version of `BFTransmitter.framewok`.  
2. Inside of the root directory of the sample project there is a directory `ios`, move there and copy the downloaded framework (`BFTransmitter.framewok`).
3. Inside the same directory launch the XCode project and you will be able to run the sample from there. The transmission capabilities are not supported by the simulator, so use a physical device.

Don't forget to activate the Bluetooth interface in your phone.

**Note:** Internet access is required during the first run in order to check for a valid license in our servers.

