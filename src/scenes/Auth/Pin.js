import React from 'react';
import { View, Alert} from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import moment from 'moment'

class Pin extends React.Component{
    constructor(props){
        super(props),
        this.state={
            source: ''
        }
    }

    componentDidMount(){
        this.getFrame()
    }

    getFrame=()=>{
        axios.post('https://sbudp-dev.posindonesia.co.id:9443/uin/',{
            "client_id" : "uin-userdev",
            "trx_type" : "CRP",
            "account_no" : "0100032515",
            "trx_date_time" : moment().format("YYYYMMDDhhmmss"),
            "system_trace_audit" : "12",
            "pos_terminal_type": "5027",
            "jenis_crp": "C",
            "kode_otp" : '308310',
            "Sign": "b48555f0a5cc3638f9d468f3c06c91e0"
        }).then(res=>{
            this.setState({source: res.data})
        }).catch(err=>{
            Alert.alert('Error', err.response)
        })
    }

    render(){
        return(
            <WebView injectedJavaScript={SCRIPT} onError={(msg)=>alert(msg)} onMessage={(asd)=>console.log(asd)} source={{html: this.state.source}} />
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