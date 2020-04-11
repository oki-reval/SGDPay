import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { color } from '_styles';
import { connect } from 'react-redux';
import { Penarikan as Penarikans, PenarikanHistory } from '_organisms';

const Listrik = (props) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Listrik' },
    { key: 'second', title: 'Riwayat' }]);
  const [withdrawal, setWithdrawal] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)


  const FirstRoute = () => (
    <Penarikans
      saldo={props.wallet.saldo}
      onPress={()=>props.navigation.navigate('PenarikanHistory')}
      setWith={(v)=>setWithdrawal(v)}
      setDesc={(v)=>setDescription(v)}
      setAmount={(v)=>setAmount(v)}
      value={{description, withdrawal, amount}}
      loading={loading}
       />
  );

  const SecondRoute = () => (
    <PenarikanHistory />
  );

  const initialLayout = { width: Dimensions.get('window').width };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={[{ backgroundColor: color.primary },]}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={false} backgroundColor={color.primary} barStyle='light-content' />
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

const mapStateToProps = state => {
  return {
    user: state.user.data,
    wallet: state.user.wallet
  }
}

export default connect(mapStateToProps)(Listrik);