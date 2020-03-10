import React, { Component } from "react";
import { View, Dimensions, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import QR from 'react-native-qrcode-svg';
import { color } from '_styles';
import { Header } from '_atoms';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

class QrCode extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        qr: true
      }
  }

  onSuccess(e) {
    alert(e);
  }

  makeSlideOutTranslation(translationType) {
    return {
      from: {
        [translationType]: 0
      },
      to: {
        [translationType]: SCREEN_WIDTH / 1.5
      }
    };
  }

  render() {
    const { qr } = this.state
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' />
        <Header rightIcon={'bolt'} />
        <QRCodeScanner
          showMarker
          onRead={this.onSuccess.bind(this)}
          cameraStyle={{ height: SCREEN_HEIGHT }}
          customMarker={
            <View style={styles.rectangleContainer}>
              {
                qr ?
                  <>
                    <View style={styles.topOverlay}>
                      <Text style={{ fontSize: 30, color: "white" }}>QR CODE SCANNER</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.leftAndRightOverlay} />

                      <View style={styles.rectangle}>
                        <Animatable.View
                          style={styles.scanBar}
                          direction="alternate-reverse"
                          iterationCount="infinite"
                          duration={1500}
                          easing="linear"
                          animation={this.makeSlideOutTranslation("translateY")}
                        />
                        <Image source={require('_assets/icons/bc.png')} style={styles.frame} />
                      </View>

                      <View style={styles.leftAndRightOverlay} />
                    </View>

                    <View style={styles.bottomOverlay} />
                  </> :
                  <View style={styles.qrcode}>
                    <QR value={'asd'} size={SCREEN_WIDTH - 130} />
                  </View>
              }
            </View>
          }
        />

        <View style={styles.footer}>
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => this.setState({ qr: true })} style={[styles.select, { backgroundColor: qr ? color.primary : '#fff' }]}>
              <Text style={[styles.textSelect, { color: qr ? '#fff' : color.g700 }]}>SCAN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ qr: false })} style={[styles.select, { backgroundColor: qr ? '#fff' : color.primary }]}>
              <Text style={[styles.textSelect, { color: qr ? color.g700 : '#fff' }]}>QR CODE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: SCREEN_WIDTH / 1.5,
    width: SCREEN_WIDTH / 1.5,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingBottom: SCREEN_WIDTH * 0.25
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH / 1.5,
    width: SCREEN_WIDTH,
    backgroundColor: "rgba(0,0,0,0.5)"
  },

  scanBar: {
    width: SCREEN_WIDTH / 1.5,
    height: 4,
    backgroundColor: "#22ff00",
    borderRadius: 100
  },
  frame: {
    height: SCREEN_WIDTH / 1.5,
    width: SCREEN_WIDTH / 1.5,
    marginTop: -4
  },
  qrcode: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: -100
  },
  footer: {
    height: 100,
    padding: 20
  },
  tab: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
  },
  select: {
    flex: 1,
    margin: 5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSelect: {
    fontSize: 16,
    fontWeight: 'bold'
  }
};

export default QrCode;