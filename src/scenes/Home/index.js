import React from 'react';
import { Text, Image, StyleSheet, StatusBar, ScrollView, Animated } from 'react-native';
import { connect } from 'react-redux';
import { HeaderTransparent, Input, Divider } from '_atoms';
import { Slider, CardInfo, Menu, CampusNews, StudentNews } from '_molecules';
import { Header } from 'react-navigation-stack'
import { color } from '_styles';

class Home extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                activeImage: 0,
                scrollAnimatedValue: new Animated.Value(0)
            }
    }

    changeStatusBar=(a)=>{
        StatusBar.setBarStyle(a<50? 'light-content' : 'dark-content', true)
    }
    render() {

        const animated = this.state.scrollAnimatedValue.interpolate({
            inputRange: [0, 30, 100],
            outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
            extrapolateRight: 'clamp',
        })
        const elevation = this.state.scrollAnimatedValue.interpolate({
            inputRange: [0, 30, 100],
            outputRange: [0.01, 0.01, 3],
            extrapolateRight: 'clamp',
        })

        return (
            <>
                <StatusBar animated translucent backgroundColor='transparent' />

                <HeaderTransparent animated={animated} elevation={elevation}>
                    <Input placeholder='Cari...' icon='search' containerStyle={{ flex: 1 }} />
                </HeaderTransparent>

                <Animated.ScrollView
                    style={styles.scrollView}
                    scrollEventThrottle={8}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollAnimatedValue } } }],
                        { listener: event => this.changeStatusBar(event.nativeEvent.contentOffset.y) }
                    )}
                >
                    <Image source={{ uri: data[this.state.activeImage] }} style={styles.backgroundImage} blurRadius={5} />
                    <Slider data={data} setActiveImage={(img) => this.setState({ activeImage: img })} />
                    <CardInfo />
                    <Menu />
                    <Divider />
                    <CampusNews data={news} />
                    <StudentNews data={news} />
                </Animated.ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: 150,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        transform: [{ scaleX: 1.7 }],
    },
    scrollView: {
        marginTop: -(Header.HEIGHT + 20),
        // backgroundColor: color.g100
    }
})

const data = [
    'https://i.ytimg.com/vi/VagboRLrYgc/maxresdefault.jpg',
    'https://d1d8o7q9jg8pjk.cloudfront.net/c/lg_5d2d85a27f4e9.jpeg',
    'https://i1.wp.com/masterkasir.com/wp-content/uploads/2019/05/Kasir_Pintar_Free.jpg?fit=640%2C307&ssl=1'
]
const news = [
    'https://bandungkita.id/wp-content/uploads/2019/07/UIN.jpeg',
    'https://uinsgd.ac.id/wp-content/uploads/2018/12/gerbang-768x510.jpg',
    'https://uinsgd.ac.id/wp-content/uploads/2018/07/gedungkampus2a-768x508.jpg'
]

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Home);