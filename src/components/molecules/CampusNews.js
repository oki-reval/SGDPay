import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { color, style } from '_styles';

export const CampusNews = (props) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={styles.headline}>Berita Kampus</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.card]}>
                    <Image source={{ uri: props.data[0] }} style={styles.img} />
                    <Text style={styles.title}>Berita Kampus 1</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={[styles.cards]}>
                        <Image source={{ uri: props.data[1] }} style={styles.imgs} />
                        <Text style={[styles.title, { fontSize: 10 }]}>Berita Kampus 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cards]}>
                        <Image source={{ uri: props.data[2] }} style={styles.imgs} />
                        <Text style={[styles.title, { fontSize: 10 }]}>Berita Kampus 3</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export const StudentNews = (props) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={styles.headline}>Berita Mahasiswa</Text>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={[styles.cards]}>
                        <Image source={{ uri: props.data[1] }} style={styles.imgs} />
                        <Text style={[styles.title, { fontSize: 10 }]}>Berita Kampus 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cards]}>
                        <Image source={{ uri: props.data[2] }} style={styles.imgs} />
                        <Text style={[styles.title, { fontSize: 10 }]}>Berita Kampus 3</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.card]}>
                    <Image source={{ uri: props.data[0] }} style={styles.img} />
                    <Text style={styles.title}>Berita Kampus 1</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    img: {
        height: width * (2 / 4),
        width: width * (2 / 3),
    },
    imgs: {
        height: width * (1 / 4),
        width: width * (1 / 3),
    },
    title: {
        position: 'absolute',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        padding: 10,
        color: '#fff',
        bottom: 0
    },
    headline: {
        fontSize: 16,
        margin: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        color: color.g900
    }
})