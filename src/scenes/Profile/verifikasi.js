import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { ButtonGradient, Input, Button, InputForm} from '_atoms';
import { Dropdown } from 'react-native-material-dropdown';
import { color } from '_styles';

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
              alamat_rumah_kabupaten:'',
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

  toValidate = () => {
    const user = this.state.user;

    if(user.nama_singkat==""){
      this.setState({ErrorNP:'nama singkat harus diisi !'});
    }
    else if (user.jenis_kelamin==""){
      this.setState({ErrorJK:'jenis kelamin harus diisi !'});
    }else if(user.agama==""){
      this.setState({ErrorAG:'agama harus diisi !'})
    }
    else{
      this.viewPager.setPage(1);
      this.setState({ErrorNP:''});
      this.setState({ErrorJK:''});
      this.setState({ErrorAG:''})
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
    Axios.post('/auth/verification', user)
        .finally(()=>this.setState({loading: false}))
        .then(res=>{
            AsyncStorage.setItem('token', res.data.access_token)
            this.props.dispatch(saveUser(res.data.user))
            this.props.navigation.navigate('MiddleWare')
        }).catch(err=>{
            Alert.alert('Error', err.message)
            console.log(err)
        })
}
    
render(){ 
  const { user, loading } = this.state
  let dataJK = [{value: 'Laki-Laki'}, {value: 'Perempuan'}];
  let dataAg = [{value: 'ISLAM'},{value:'KRISTEN'},{value:'HINDU'},{value:'BUDHA'},{value:'KONGHUCU'}];
  return (

    <ViewPager style={styles.PageView} scrollEnabled={false} initialPage={0} ref={(viewPager) => {this.viewPager = viewPager}} scrollEnabled={true}>
      <ScrollView key="1" style={{flex:1,padding:20}}>
        <Text style={styles.Text_welcome}> Buat Rekening </Text>

        <Text style={styles.Text} > Nama Singkat </Text>
        <InputForm placeholder='sgdpay' onChangeText={(val)=>this.handleChange('nama_singkat', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorNP}</Text>

        <Text style={styles.Text} > Jenis Kelamin </Text>
        <Dropdown 
          dropdownOffset={{top:8, left:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0}}  
          data={dataJK}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('jenis_kelamin', val)} />
        <Text style={styles.TextError}>{this.state.ErrorJK}</Text>

        <Text style={styles.Text}> Agama </Text>
        <Dropdown 
          dropdownOffset={{top:8, left:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0}}  
          data={dataAg}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('agama', val)} />
        <Text style={styles.TextError}>{this.state.ErrorAG}</Text>

        <Text style={styles.Text}> Pekerjaan </Text>
        <Input value='KTP'></Input>
        <Text style={styles.Text}> Nomor Identitas </Text>
        <Input value='123xxxxxxxxxxxxx'></Input>

        <ButtonGradient title='Selanjutnya' loading={loading}  onPress={this.toValidate} style={{marginTop:30}}/>
        <Text style={{height:50}}>  </Text>
      </ScrollView>

      <ScrollView key="2" style={{flex:1,padding:20}}>
        <Text style={styles.Text}> Nama Nasabah</Text>
        <Input placeholder='Nama Lengkap '></Input>
        <Text style={styles.Text}> Nama Panggilan </Text>
        <Input placeholder='Nama depan / nama tengah / nama belakang '></Input>
        <Text style={styles.Text}> jenis kelamin </Text>
        <Input placeholder='xxx@gmail.com'></Input>
        <Text style={styles.Text}> Agama </Text>
        <Input value='KTP'></Input>
        <Text style={styles.Text}> Pekerjaan </Text>
        <Input placeholder='123xxxxxxxxxxxxx'></Input>
        <Text style={styles.Text}> Status Perkawinan </Text>
        <Input placeholder='123xxxxxxxxxxxxx'></Input>
        <Text style={styles.Text}> Tanggal Berakhir Identitas </Text>
        <Input placeholder='123xxxxxxxxxxxxx'></Input>

        <Button title='Selanjutnya' loading={loading}   style={{marginTop:30}}/> 
      </ScrollView>

      <ScrollView key="3" style={{flex:1, padding:20}}>
        <Text style={styles.Text}> Alamat Rumah</Text>
        <Input placeholder='jalan xxxxxxxxx '></Input>
        <Text style={styles.Text}> RT </Text>
        <Input placeholder='0xx '></Input>
        <Text style={styles.Text}> RW </Text>
        <Input placeholder='0xx'></Input>
        <Text style={styles.Text}> Kelurahan </Text>
        <Input value='Kelurahan xxxxxxx'></Input>
        <Text style={styles.Text}> Kecamatan </Text>
        <Input placeholder='Kecamatan xxxxxxx'></Input>
        <Text style={styles.Text}> Kabupaten </Text>
        <Input placeholder='Kabupaten xxxxxx'></Input>
        <Text style={styles.Text}> Propinsi </Text>
        <Input placeholder='propinsi xxxxxxx'></Input>
        <Text style={styles.Text}> Kode Pos </Text>
        <Input placeholder='000xx'></Input>

        <Button title='Selanjutnya' loading={loading}   style={{marginTop:30}}/>

        <Text style={{height:50}}>  </Text>
      </ScrollView>

      <View key="4" style={styles.PageView}>
        <Text style={styles.Text}> Tujuan Pembukaan Dana</Text>
        <Input placeholder=' '></Input>
        <Text style={styles.Text}> Sumber Dana </Text>
        <Input placeholder=' '></Input>
        <Text style={styles.Text}> Tempat Lahir </Text>
        <Input placeholder=' '></Input>
        <Text style={styles.Text}> Tanggal Lahir </Text>
        <Input value=' '></Input>
        <Text style={styles.Text}> Penghasila per Tahun </Text>
        <Input placeholder='Rp.'></Input>
        <Text style={styles.Text}> Nama Ibu Kandung </Text>
        <Input placeholder=' '></Input>
        <Text style={styles.Text}> Alamat Email </Text>
        <Input placeholder=' '></Input>
        <Text style={styles.Text}> Nomor Hp </Text>
        <Input placeholder='(62)8xxxxxxxxxxx'></Input>

        <Button title='Buat Rekening' loading={loading}   style={{marginTop:30}}/>
      </View>
      <ScrollView key="5" style={{ flex: 1 }}>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page</Text>
        <Text>Second page end</Text>
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
  marginBottom: 30,
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
  paddingBottom:0, 
  paddingHorizontal:8, 
  borderColor:color.g400, 
  backgroundColor:color.g100, 
  borderRadius:10
}
});

export default Verifikasi