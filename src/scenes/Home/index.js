import React from 'react';
import { Text, Image, StyleSheet, StatusBar, ScrollView, Animated, Alert, RefreshControl, View, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { HeaderTransparent, Input, Divider, Button, HeaderCart,Icons } from '_atoms';
import { Slider, CardInfo, Menu, CampusNews, StudentNews, FullMenu, Loading, ProductUin } from '_molecules';
import { Header } from 'react-navigation-stack'
import { color, style } from '_styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { getUser } from '_states/actions/user';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Home extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                activeImage: 0,
                scrollAnimatedValue: new Animated.Value(0),
                animatedValue: new Animated.Value(0),
                yAxis: 0,
                fullMenu: false,
                product: " ",

            }
    }

    componentDidMount() {
        console.disableYellowBox = true;
    }

    changeStatusBar = (yAxis) => {
        StatusBar.setBarStyle(yAxis < 50 ? 'light-content' : 'dark-content', true)
    }

    handleScroll = (yAxis) => {
        console.log(yAxis)
        this.changeStatusBar(yAxis)
        this.setState({ yAxis })
    }

    handlePress = (item) => {


        if (item.route == 'toggle') {
            this.setState({ fullMenu: true })
        } else if (item.route == 'alert') {
            Alert.alert('', item.params)
        } else {
            this.props.navigation.navigate(item.route, { data: item.params });
        }

    }

    toAllProduct = () => {
        this.props.navigation.navigate('UinProduct')
    }

    getUsers = () => {
        this.props.dispatch(getUser())
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

        const { product } = this.state;

        return (
            <>
                <StatusBar animated translucent backgroundColor='transparent' />

                <HeaderCart animated={this.state.animatedValue}>
                    <Input placeholder='Cari...' icon='search' containerStyle={{ flex: 1 }} />
                    <Icons src={require('_assets/icons/chat.png')} color={this.state.yAxis < 50 ? '#fff' : color.g700} size={25} onPress={() => this.props.navigation.navigate('Message')} />
                </HeaderCart>

                <Animated.ScrollView
                    style={styles.scrollView}
                    scrollEventThrottle={8}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.animatedValue} } }],
                        {
                            listener: event => this.handleScroll(event.nativeEvent.contentOffset.y),
                            useNativeDriver: false
                        },
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.loading}
                            onRefresh={this.getUsers}
                            progressViewOffset={50}
                        />
                    }
                >
                    <Image source={{ uri: data[this.state.activeImage] }} style={styles.backgroundImage} blurRadius={5} />
                    <Slider data={data} setActiveImage={(img) => this.setState({ activeImage: img })} />
                    <CardInfo onPress={this.handlePress} />
                    <Menu onPress={this.handlePress} />
                    <Divider />
                    <View style={styles.ViewProduct}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.headline}> Produk Terlaris</Text>
                            <TouchableOpacity onPress={this.toAllProduct}>
                                <Text style={{ margin: 10, color: color.gr600, }}> Lihat Semua </Text>
                            </TouchableOpacity>
                        </View>
                        <ProductUin product={product} horizontal={true} numberOfColum={1}></ProductUin>
                    </View>
                    <Divider />
                    <FullMenu isVisible={this.state.fullMenu} toggle={() => this.setState({ fullMenu: false })} />
                    <View style={{height:80}}>

                    </View>
                </Animated.ScrollView>
            </>
        )
    }
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    backgroundImage: {
        height: 150,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        transform: [{ scaleX: 1.7 }],
    },
    scrollView: {
        marginTop: -(Header.HEIGHT + 15),
        // backgroundColor: color.g100
    },
    ViewProductItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 8,
        borderRadius: 5

    },

    headline: {
        fontSize: 16,
        margin: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        color: color.g700,
    }
})

const data = [
    'https://i.ytimg.com/vi/VagboRLrYgc/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_DY-cJjg4J4M3stPk-MV5eqKD01oABHF-sfRntc6RImofcRRJ',
    'https://i1.wp.com/masterkasir.com/wp-content/uploads/2019/05/Kasir_Pintar_Free.jpg?fit=640%2C307&ssl=1'
]
const news = [
    'https://bandungkita.id/wp-content/uploads/2019/07/UIN.jpeg',
    'https://uinsgd.ac.id/wp-content/uploads/2018/12/gerbang-768x510.jpg',
    'https://uinsgd.ac.id/wp-content/uploads/2018/07/gedungkampus2a-768x508.jpg'
]

const mapStateToProps = state => {
    return {
        user: state.user.data,
        loading: state.user.loading
    }
}

export default connect(mapStateToProps)(Home);