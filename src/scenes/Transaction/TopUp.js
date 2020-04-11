import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

// or any pure javascript modules available in npm
import Collapsible from 'react-native-collapsible'; // 0.9.0

class TopUp extends React.Component {
  constructor(props) {
    super(props),
        this.state = {
          outerCollapse: true,
          innerCollapse: true,
        }
  }

  render() {
    return (
      <View style={styles.container}>
        {mapObject(OBJ, function (index, value) {
          <View>  
            <Button
              title="Toggle Outer"
              onPress={() => this.setState({ outerCollapse: false })}
            />
            <Collapsible collapsed={this.state.outerCollapse}>
              <Text style={styles.center}>I'm outer</Text>
              
              <Button title="Toggle Inner" onPress={() => this.setState({ innerCollapse:false })}/>
                
              <Collapsible collapsed={innerCollapse}>
                <Text style={styles.center}>I'm inner</Text>
              </Collapsible>
            </Collapsible>
          </View> 
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  center: {
    textAlign: 'center'
  }
});

const OBJ = {
  "1":{
    "segmentname":"samplesegmentname",
    "childsegments":{
      "childsegmentname":"samplechildsegmentname",
    }
  },
  "2":{
    "segmentname":"samplesegmentname2",
    "childsegments":{
      "childsegmentname":"samplechildsegmentname2",
    }
  }
}


function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

export default TopUp;