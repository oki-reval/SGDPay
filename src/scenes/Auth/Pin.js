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
            "account_no" : "0100032150",
            "trx_date_time" : moment().format("YYYYMMDDhhmmss"),
            "system_trace_audit" : "12",
            "pos_terminal_type": "5027",
            "jenis_crp": "N",
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
            <WebView onError={(msg)=>alert(msg)} onLoadEnd={(asd)=>console.log(asd)} source={{html: this.state.source}} />
        )
    }
}

export default Pin;