import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Input, ButtonGradient } from '_atoms';
import { color } from '_styles';

const PulsaInquiry = (props) => (
    <View style={[styles.scene]}>
        <View style={{flex: 1}}>
            <Text style={styles.title}>Tempat Penarikan</Text>
            <Text style={styles.value}>Tempat Penarikan</Text>
            <Text style={styles.title}>Nomor Rekening</Text>
            <Text style={styles.value}>Nomor Rekening</Text>
            <Text style={styles.title}>Nominal</Text>
            <Text style={styles.value}>Nominal</Text>
            <Text style={styles.title}>Catatan</Text>
            <Text style={styles.value}>Catatan</Text>
        </View>
        <ButtonGradient title='Penarikan' />
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    title: {
        fontSize: 12,
        color: color.g700
    },
    value: {
        fontSize: 16,
        color: color.g900,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default PulsaInquiry;