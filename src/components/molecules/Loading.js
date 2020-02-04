import React from 'react';
import { View, Text, Image, StyleSheet, Modal } from 'react-native';
import { color } from '_styles';
import { BallIndicator } from 'react-native-indicators';

const Loading = (props) => {
    return (
        <Modal visible={props.isLoading} style={{margin: 0}} transparent={true} animationType='fade' >
            <View style={styles.wrap}>
                <BallIndicator color={'#fff'} size={30} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
})
export default Loading