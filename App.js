import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from 'react-native';

import { GiftedChat, Actions, Bubble } from 'react-native-gifted-chat';
import Bridgefy from 'react-native-bridgefy-sdk'
import BridgefyClient from './BridgefyClient'

export default class BridgefyReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onSend = this.onSend.bind(this);
    this._isMounted = false;
  }
  componentWillMount() {

    Bridgefy.init("API_KEY",
      (errorCode, message) => {
        console.log("ERROR" + message + ":" + errorCode);
      },
      (client) => {
        console.log(JSON.stringify(client));

        Bridgefy.start();
        BridgefyClient.user = {
          _id: client.userUuid,
          name: "Broadcast User",
          avatar: 'https://unsplash.it/200/300/?random',
        }

        this._isMounted = true;
      }
    );

    //
    // BridgefyMessageListener
    //

    DeviceEventEmitter.addListener('onMessageReceived', (message) => {
      console.log('onMessageReceived: ' + JSON.stringify(message));
    }
    );

    DeviceEventEmitter.addListener('onMessageSent', (message) => {
      console.log('onMessageSent: ' + JSON.stringify(message));
    }
    );

    DeviceEventEmitter.addListener('onMessageReceivedException', (error) => {

      console.log('onMessageReceivedException: ' + error);
      console.log('sender: ' + error.sender); // User ID of the sender
      console.log('code: ' + error.code); // error code
      console.log('message' + error.message); // message object empty
      console.log('description' + error.description); // Error cause 

    }
    );

    DeviceEventEmitter.addListener('onMessageFailed', (error) => {
      console.log('onMessageFailed: ' + error);

      console.log('code: ' + error.conde); // error code
      console.log('message' + error.message); // message object
      console.log('description' + error.description); // Error cause 

    }
    );

    DeviceEventEmitter.addListener('onBroadcastMessageReceived', (message) => {
      console.log('onBroadcastMessageReceived: ' + JSON.stringify(message));
      if (message.content.text)
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, message.content),
          };
        });
    }
    );

    //
    // BridgefyStateListener
    //   

    DeviceEventEmitter.addListener('onStarted', (device) => {
      console.log('onStarted: ' + JSON.stringify(device));
    }
    );

    DeviceEventEmitter.addListener('onStartError', (error) => {
      console.log('onStartError: ' + error);
      console.log('code: ' + error.conde); // error code
      console.log('description' + error.description); // Error cause 
    }
    );

    DeviceEventEmitter.addListener('onStopped', () => {
      console.log('onStopped');
    }
    );

    DeviceEventEmitter.addListener('onDeviceConnected', (device) => {
      BridgefyClient.deviceList.push(device);
      console.log('onDeviceConnected: ' + device.DeviceName + " size: " + BridgefyClient.deviceList.length);
    }
    );

    DeviceEventEmitter.addListener('onDeviceLost', (device) => {
      console.log('onDeviceLost: ' + device);
    }
    );

  }
  onSend(messages = []) {

    var message = {
      content: messages[0],
    };

    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose this.answerDemo(messages);
    Bridgefy.sendBroadcastMessage(message);

  }

  render() {
    return (
          <GiftedChat
            messages={this.state.messages}
            onSend={this.onSend}
            user={BridgefyClient.user} />
      );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});
