import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { color } from '_styles';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';




const Transfer = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Transfer' },
    { key: 'second', title: 'Riwayat' }]);

  const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#fff', padding: 10 }]}>
      <LinearGradient colors={['#009BA0', '#65DA8D']} style={[styles.wraper, { height: 100, flexDirection: 'column' }]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 6 }} >
        <Text style={[styles.text]}> Saldo Saat Ini </Text>
        <Text style={[styles.text, { fontSize: 30, marginTop: 5 }]}>{props.wallet.saldo} </Text>
      </LinearGradient>
      <Text> Note : Untuk transfer belum bisa melalui aplikasi, {'\t'}transfer bisa dilakukan di Bank atau Giro Pos</Text>
    </View>
  );


  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'white', padding: 10, justifyContent: 'center', }]}>
      <Image source={require('_assets/images/sorry.png')} style={styles.img}></Image>
      <Text style={styles.Text_welcome}> Maaf </Text>
      <Text style={styles.TextRiw}> Anda belum melakukan transaksi transfer saldo melalui aplikasi </Text>
    </View>
  );
  const initialLayout = { width: Dimensions.get('window').width };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={[{ backgroundColor: color.primary },]}
    />
  );

  const toHome = () => {
    props.navigation.navigate('Home');
  }

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.scene}>
      <View style={{ backgroundColor: color.primary, height: 60, flexDirection: 'row', paddingTop: 30, paddingLeft: 20 }}>
        <TouchableOpacity onPress={toHome}>
          <Image style={{ height: 20, width: 20, marginTop: 7 }} source={require('_assets/icons/iconback.png')} ></Image>
        </TouchableOpacity>

        <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', fontSize: 20, marginLeft: 20 }} > Transfer </Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  wraper: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
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

const mapStateToProps = state => {
  return {
    user: state.user.data,
    wallet: state.user.wallet
  }
}

export default connect(mapStateToProps)(Transfer);