import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

class Example extends Component {
  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <Dropdown 
            dropdownOffset={{top:8, left:0}}
            containerStyle={{
              borderWidth:1,
              marginTop:5,
              paddingBottom:0,
              paddingHorizontal:8,
              borderColor:color.g400, 
              backgroundColor:color.g100, 
              borderRadius:10 }}
            inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0}}  
            data={dataJK}
            fontSize={15} />
    );
  }
}