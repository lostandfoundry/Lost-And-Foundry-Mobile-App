# Lost-And-Foundry-App
Lost-And-Foundry-App is a project that makes use of BridgefySDK through its React Native interface.   
The project consists of a emergency broadcasting app that send messages to all nearby devices that are running the application too.  
This project was inspired by [Gifted chat](https://github.com/FaridSafi/react-native-gifted-chat).

<div class="Smartphone-s165niw0-0 krsaKg" style="background:#141414"><video autoplay="" loop="" playsinline="" preload="none" muted="" poster="https://thumbs.gfycat.com/ThatSlimyBeardedcollie-poster.jpg" style="width:100%;height:100%;position:absolute;top:0;left:0;transform:none"><track kind="captions"><source src="https://giant.gfycat.com/ThatSlimyBeardedcollie.webm" type="video/webm"><source src="https://giant.gfycat.com/ThatSlimyBeardedcollie.mp4" type="video/mp4"></video></div><div class="Button__ButtonContainer-s1yo1pni-0 kZcYqm"><div class="Button-s1yo1pni-1 ewehdc" alt="Show detail"></div></div></div>

![](https://media.giphy.com/media/hriwWp7MSyTeJNPt6d/giphy.gif)

Head Over to the GiftedChat repo and be sure to star it.

## Requirements
In order to run the app you would need to cover the following requirements:  

- `npm` installed.
- React Native minimum version `^0.45.1`.
- React version `^16.0.0-alpha.13`.


## Installation

1. Clone this repository

```bash
git clone https://github.com/nimishbongale/Lost-And-Foundry-App.git 
```

2. Move to the root directory
3. Install dependencies using `npm install`
4. Open App.js and replace the string `YOUR_API_KEY_HERE` with your actual API Key. (You can get your own API Key at the bridgefy website)

Before running the application take in account the following considerations/previous steps for every platform.

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

