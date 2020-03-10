import React from 'react';
import { View, Alert} from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import moment from 'moment';
import { Loading } from '_molecules';
import { PinStatus } from '_organisms';

class Pin extends React.Component{
    constructor(props){
        super(props),
        this.state={
            source: '',
            loading: true,
            success: false
        }
    }

    componentDidMount(){
        this.getFrame()
    }

    getFrame=()=>{
        axios.post(`/manage/pin`,{
            account_no: '0100032515',
            type: 'change'
        })
        .finally(()=>this.setState({loading: false}))
        .then(res=>{
            this.setState({source: res.data})
        }).catch(err=>{
            Alert.alert('Error', err.response)
        })
    }

    onMessage=(data)=>{
        const status = data.nativeEvent.url.slice(50)
        if(status=='success'){
            this.setState({success: true})
        }
    }

    render(){
        const { loading, success } = this.state
        if(success){
            return(
                <PinStatus title='Selamat' subtitle='Kamu berhasil merubah PIN' onPress={()=>this.props.navigation.navigate('Profile')} />
            )
        }
        return(
            <View style={{flex: 1}}>
                <WebView injectedJavaScript={SCRIPT} onError={(data)=>this.onMessage(data)} source={{html: this.state.source}} />
                <Loading isLoading={loading} />
            </View>
        )
    }
}

const SCRIPT = `
    const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0');
    meta.setAttribute('name', 'viewport');
    document.head.appendChild(meta);
`;

export default Pin;