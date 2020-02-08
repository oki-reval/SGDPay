import React, { useState } from 'react';
import { View, Text, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { color } from '_styles';
import { Header } from 'react-navigation-stack'

const widthScreen = Dimensions.get('screen').width

const Slider = (props) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const onSnap=(index)=>{
        setActiveIndex(index)
        props.setActiveImage(index)
    }

    const renderItem = ({ item, index }) => {
        return (
            <Image source={{ uri: item }} style={{ width: widthScreen - 60, height: 100, borderRadius: 10 }} />
        );
    }

    return (
        <>
            <View style={{ marginTop: -75 }}>
                <Carousel
                    data={props.data}
                    loop
                    autoplay
                    renderItem={renderItem}
                    sliderWidth={widthScreen}
                    itemWidth={widthScreen - 60}
                    inactiveSlideOpacity={1}
                    onSnapToItem={index => onSnap(index)}
                />
                <Pagination
                    dotsLength={props.data.length}
                    activeDotIndex={activeIndex}
                    containerStyle={{ paddingVertical: 10 }}
                    dotColor={color.primary}
                    inactiveDotColor={color.g500}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        width: widthScreen,
        height: 115,
        paddingTop: 75
    },
    imageStyle: {
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        transform: [{ scaleX: 1.5 }],
        width: widthScreen
    },
})

export default Slider