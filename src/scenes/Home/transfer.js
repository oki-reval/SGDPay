import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { ButtonGradient, Input, Button, InputForm} from '_atoms';
import { Dropdown } from 'react-native-material-dropdown';
import { color } from '_styles';
import Axios from 'axios';

class Verifikasi extends React.Component{
  constructor(props){
      super(props),
      this.state={
          user:{
              nama_singkat: '',
              jenis_kelamin: '',
              agama: '',
              pekerjaan: '',
              status_perkawinan: '',
              jenis_identitas:'',
              nomor_identitas:'',
              tanggal_berakhir_identitas:'',
              alamat_rumah_jalan:'',
              alamat_rumah_rt:'',
              alamat_rumah_rw:'',
              alamat_rumah_kelurahan:'',
              alamat_rumah_kecamatan:'',
              alamat_rumah_kota_kabupaten:'',
              alamat_rumah_provinsi:'',
              alamat_rumah_kode_pos:'',
              tujuan_penggunaan_dana:'',
              sumber_dana:'',
              tempat_lahir:'',
              tanggal_lahir:'',
              penghasilan_utama_per_tahun:'',
              nama_ibu_kandung:'',
              alamat_email:'',
              telepon_hp_nomor:''
          },
          loading: false
      }
  }

  handleChange = async (type, val) => {
    const user = Object.assign({}, this.state.user)
    user[type] = val
    this.setState({user})
  }

  toCreRek = async () => {
    this.setState({loading: true})
    const user = this.state.user
    console.log(user)
    Axios.post('/verification', user)
        .finally(()=>this.setState({loading: false}))
        .then(res=>{
            console.log(res.data)
            this.props
        }).catch(err=>{
            Alert.alert('Error', err.response.data.message)
            console.log(err.response)
        }) 
    }
    
render(){ 
  const { user, loading } = this.state
  return (

    <ViewPager style={styles.PageView} scrollEnabled={false} initialPage={0} ref={(viewPager) => {this.viewPager = viewPager}} scrollEnabled={true}>
      <ScrollView key="1" style={{flex:1,padding:20}}>
        <Text style={styles.Text_welcome}> Buka Rekening </Text>

        <Text style={styles.Text} > Nama Singkat </Text>
        <InputForm onChangeText={(val)=>this.handleChange('nama_singkat', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorNP}</Text>

        <Text style={styles.Text} > Jenis Kelamin </Text>
        <Dropdown 
          dropdownOffset={{top:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0, justifyContent:'flex-start'}}  
          data={dataJK}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('jenis_kelamin', val)} />
        <Text style={styles.TextError}>{this.state.ErrorJK}</Text>

        <Text style={styles.Text}> Agama </Text>
        <Dropdown 
          dropdownOffset={{top:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0, justifyContent:'flex-start'}}  
          data={dataAg}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('agama', val)} />
        <Text style={styles.TextError}>{this.state.ErrorAG}</Text>

        
        <ButtonGradient title='Selanjutnya' loading={loading}  onPress={this.toValidate} style={{marginTop:20}}/>
        <Text style={{height:50}}>  </Text>
      </ScrollView>

      <ScrollView key="2" style={{flex:1,padding:20}}>
        <Text style={styles.Text}> Jenis Identitas</Text>
        <Dropdown 
          dropdownOffset={{top:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0, justifyContent:'flex-start'}}  
          data={dataJi}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('jenis_identitas', val)} />
        <Text style={styles.TextError}>{this.state.ErrorJi}</Text>

        <Text style={styles.Text}> Nomor Identitas </Text>
        <InputForm keyboardType='numeric' onChangeText={(val)=>this.handleChange('nomor_identitas', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorNi}</Text>

        <Text style={styles.Text}> Tanggal Berakhir Identitas </Text>
        <InputForm keyboardType='numeric' placeholder='format : dd/mm/yyyy' onChangeText={(val)=>this.handleChange('tanggal_berakhir_identitas', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorTi}</Text>
        
        <Text style={styles.Text}> Alamat Rumah  </Text>
        <InputForm placeholder='Jalan'  onChangeText={(val)=>this.handleChange('alamat_rumah_jalan', val)}></InputForm>
        <View style={{flexDirection:'row', marginVertical:5}}>
        <Text style={[styles.Text, { alignSelf:'center'}]}> Rt  </Text>  
        <InputForm style={styles.rowView} keyboardType='numeric' onChangeText={(val)=>this.handleChange('alamat_rumah_rt', val)}></InputForm>
        <Text style={[styles.Text, { alignSelf:'center', marginLeft:20}]}> Rw  </Text>  
        <InputForm style={styles.rowView} keyboardType='numeric' onChangeText={(val)=>this.handleChange('alamat_rumah_rw', val)}></InputForm>
        </View>
        <InputForm placeholder='Kelurahan'  onChangeText={(val)=>this.handleChange('alamat_rumah_kelurahan', val)}></InputForm>
        <InputForm placeholder='Kecamatan'  onChangeText={(val)=>this.handleChange('alamat_rumah_kecamatan', val)}></InputForm>
        <InputForm placeholder='Kabupaten'  onChangeText={(val)=>this.handleChange('alamat_rumah_kota_kabupaten', val)}></InputForm>
        <InputForm placeholder='Provinsi'  onChangeText={(val)=>this.handleChange('alamat_rumah_provinsi', val)}></InputForm>
        <InputForm placeholder='Kode Pos' keyboardType='numeric'  onChangeText={(val)=>this.handleChange('alamat_rumah_kode_pos', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorAl}</Text>
        <ButtonGradient title='Selanjutnya' loading={loading} onPress={this.toValidateV1}  style={{marginTop:30}}/>
        <Text style={{height:50}}>  </Text> 
      </ScrollView>

      <ScrollView key="3" style={{flex:1, padding:20}}>
       
        <Text style={styles.Text}> Penghasilan Utama Pertahun</Text>
        <Dropdown 
          dropdownOffset={{top:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0, justifyContent:'flex-start'}}  
          data={datapU}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('penghasilan_utama_per_tahun', val)} />
        <Text style={styles.TextError}>{this.state.ErrorPu}</Text>

        <Text style={styles.Text}> Tempat Lahir  </Text>
        <InputForm  onChangeText={(val)=>this.handleChange('tempat_lahir', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorTal}</Text>

        <Text style={styles.Text}> Tanggal Lahir  </Text>
        <InputForm placeholder='Format : yyyy-mm-dd' keyboardType='numeric' onChangeText={(val)=>this.handleChange('tanggal_lahir', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorTl}</Text>

        <ButtonGradient title='Selanjutnya' loading={loading}  onPress={this.toCreRek} style={{marginTop:30}}/>
        <Text style={{height:50}}>  </Text>
      </ScrollView>
    </ViewPager>
  );
}
}

const styles = StyleSheet.create({
viewPager: {
  flex: 1,
},
PageView:{
  flex: 1,
  padding: 20,
  justifyContent: 'center',
  backgroundColor: 'white',
},

Text_welcome:{
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: 20,
  fontSize: 24,
  color: 'black',
},
Text:{
  alignItems: 'center',
  textAlign: 'center',
  alignSelf: 'baseline',
  fontSize: 16,
  color: 'black',
},
TextError:{
  alignItems: 'center',
  textAlign: 'center',
  alignSelf: 'flex-end',
  fontSize: 14,
  color: 'red',
},
Dropdown:{
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: color.g400,
  borderWidth: 1,
  borderRadius: 10,
  marginTop: 5,
  backgroundColor: color.g100
},
container:{
  borderWidth:1, 
  marginTop:5, 
  height:39,
  paddingTop:6, 
  paddingHorizontal:8, 
  borderColor:color.g400, 
  backgroundColor:color.g100, 
  borderRadius:5
},
rowView:{
  width:100,
  padding:10,
}
});

export default Verifikasi