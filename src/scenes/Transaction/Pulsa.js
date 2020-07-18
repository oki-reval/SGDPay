import React, {useCase, useState} from 'react';
import {View,StyleSheet,StatusBar,Dimensions} from 'react-native';
import {color} from '_styles';
import {PulsaPascaBayar,PulsaPrabayar} from '_organisms';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const Pulsa = (props) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title:'Prabayar'},
        {key: 'second', title:'Pasca Bayar'}
    ]);
    const [loading, setLoading] = useState(false);

    const FirstRoute = () =>(
        <PulsaPrabayar/>
    );

    const SecondRoute = () =>(
        <PulsaPascaBayar />
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


    return(
        <View style={{flex: 1}}>
            <StatusBar translucent={false} backgroundColor={color.primary} barStyle='light-content' />
            <TabView
                navigationState={{index,routes}}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    View:{
        
    }

});

export default Pulsa;