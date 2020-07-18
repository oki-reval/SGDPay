import React,{useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import {Input} from '_atoms';


const PulsaPascaBayar = () =>{
    const {value, setValue}=useState(" ");
    
    return(
        <View>
            <Input value={value} titlle="Masukan Nomer Hp ">  </Input>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default withNavigation(PulsaPascaBayar);
