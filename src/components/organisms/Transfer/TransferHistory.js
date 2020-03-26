import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TransferHistory = () => (
    <View style={[styles.scene, { backgroundColor: 'white', padding: 10, justifyContent: 'center', }]}>
      <Image source={require('_assets/images/sorry.png')} style={styles.img}></Image>
      <Text style={styles.Text_welcome}> Maaf </Text>
      <Text style={styles.TextRiw}> Anda belum melakukan transaksi transfer saldo melalui aplikasi </Text>
    </View>
  );

  const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
    img: {
      width: 250,
      height: 183,
      marginBottom: 50,
      alignSelf: 'center'
    },
    TextRiw: {
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 16,
      color: 'black',
      bottom: 0
    },
    Text_welcome: {
      fontWeight: 'bold',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 20,
      fontSize: 24,
      color: 'black',
    },
  });

  export default TransferHistory;