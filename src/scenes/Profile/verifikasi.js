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

  toValidate = () => {
    const user = this.state.user;

    if(user.nama_singkat==""){
      this.setState({ErrorNP:'nama singkat harus diisi !'});
    }
    else if (user.jenis_kelamin==""){
      this.setState({ErrorJK:'jenis kelamin harus diisi !'});
    }else if(user.agama==""){
      this.setState({ErrorAG:'agama harus diisi !'})
    }else if(user.pekerjaan==""){
      this.setState({ErrorPk:'pekerjaan harus diisi'})
    }else if(user.status_perkawinan==""){
      this.setState({ErrorSt:'status perkawinan harus diisi'})
    }
    else{
      this.viewPager.setPage(1);
      this.setState({ErrorNP:''});
      this.setState({ErrorJK:''});
      this.setState({ErrorAG:''});
      this.setState({ErrorSt:''});
      this.setState({ErrorPk:''});
    }
  } 

  toValidateV1 = () => {
    const user = this.state.user;

    if(user.jenis_identitas==""){
      this.setState({ErrorJi:'nama singkat harus diisi !'});
    } else if (user.nomor_identitas==""){
      this.setState({ErrorNi:'jenis kelamin harus diisi !'});
    } else if(user.tanggal_berakhir_identitas==""){
      this.setState({ErrorTi:'tanggal berakhir identitas harus diisi !'})
    } else if(user.alamat_rumah_jalan==""){
      this.setState({ErrorAl:'Data Alamat jalan harus diisi !'})
    } else if(user.alamat_rumah_rt==""){
      this.setState({ErrorAl:'Data Alamat Rt harus diisi !'})
    } else if(user.alamat_rumah_rw==""){
      this.setState({ErrorAl:'Data Alamat Rw harus diisi !'})
    } else if(user.alamat_rumah_kelurahan==""){
      this.setState({ErrorAl:'Data Alamat kelurahan harus diisi !'})
    } else if(user.alamat_rumah_kecamatan==""){
      this.setState({ErrorAl:'Data Alamat kecamatan harus diisi !'})
    } else if(user.alamat_rumah_kota_kabupaten==""){
      this.setState({ErrorAl:'Data Alamat kabupaten harus diisi !'})
    } else if(user.alamat_rumah_provinsi==""){
      this.setState({ErrorAl:'Data Alamat provinsi harus diisi !'})
    } else if(user.alamat_rumah_kode_pos==""){
      this.setState({ErrorAl:'Data Alamat kode pos harus diisi !'})
    } 
    else{
      this.viewPager.setPage(2);
      this.setState({ErrorNi:''});
      this.setState({ErrorJi:''});
      this.setState({ErrorAl:''})
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
    
    if(user.tujuan_penggunaan_dana==""){
      this.setState({ErrorTp:'tujuan penggunaan dana harus diisi !'});
    } else if (user.sumber_dana==""){
      this.setState({ErrorSd:'sumber dana harus diisi !'});
    } else if(user.tempat_lahir==""){
      this.setState({ErrorTal:'Tempat lahir harus diisi !'})
    } else if(user.tanggal_lahir==""){
      this.setState({ErrorTl:'Tanggal Lahir harus diisi !'})
    } else if(user.penghasilan_utama_per_tahun==""){
      this.setState({ErrorPu:'Penghasila Utama pertahun harus diisi !'})
    } else if(user.nama_ibu_kandung==""){
      this.setState({ErrorIk:'nama ibu kandung harus diisi !'})
    } else if(user.alamat_email==""){
      this.setState({ErrorAe:'Alamat email harus diisi !'})
    } else if(user.telepon_hp_nomor==""){
      this.setState({ErrorHp:'nomor hp harus diisi !'})
    } 
    else{
      this.setState({ErrorNi:''});
      this.setState({ErrorJi:''});
      this.setState({ErrorAl:''})
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
}
    
render(){ 
  const { user, loading } = this.state
  let dataJK = [{value: 'Pria'}, {value: 'Wanita'}];
  let dataAg = [{value: 'Islam'},{value:'Protestan'},{value:'Katolik'},{value:'Budha'},{value:'Hindu'},{value:'Lainya'}];
  let dataPk = [{value:'PELAJAR/MAHASISWA'},{value:'IBU RUMAH TANGGA'},{value:'PEGAWAI NEGERI'},{value:'TNI/POLRI'},{value:'PEJABAT NEGARA/DAERAH'},
                {value:'PENSIUNAN'},{value:'PENGUSAHA PABRIKAN'},{value:'PEDAGANG'},{value:'PENGUSAHA JASA'},{value:'DOKTER'},{value:'PENGACARA'},
                {value:'AKUNTAN'},{value:'WARTAWAN'},{value:'SENIMAN'},{value:'NOTARIS'},{value:'PROFESIONAL LAINYA'},{value:'LAINYA....'}];
  let dataSt = [{value:'Lajang'},{value:'Menikah'},{value:'Janda/Duda'}];
  let dataJi = [{value:'KTP'},{value:'SIM'},{value:'Pasport'},{value:'KIMS'},{value:'KITAS'},{value:'KITAP'},{value:'NIK'},
                {value:'Akte Kelahiran'},{value:'NIS/NISN'}];
  let dataTp = [{value:'PENGELUARAN RUTIN PRIBADI'},{value:'BISNIS'},{value:'PEMBAYARAN'}];
  let dataSd = [{value:'HASIL UTAMA'}, {value:'HASIL INVESTASI'}, {value:'LAINYA'}, {value:'GAJI'}, {value:'TABUNGAN PRIBADI'},{value:'HASIL PERDAGANGAN/JASA/USAHA'}];
  let datapU = [{value:'< 15 Juta'}, {value:'15 - 25 Juta'}, {value:'> 25, - 400 Juta'},{value:'> 400 Juta'}];
  
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

        <Text style={styles.Text}> Pekerjaan </Text>
        <Dropdown 
          dropdownOffset={{top:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0, justifyContent:'flex-start'}}  
          data={dataPk}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('pekerjaan', val)} />
        <Text style={styles.TextError}>{this.state.ErrorPk}</Text>

        <Text style={styles.Text}> Status Perkawinan </Text>
        <Dropdown 
          dropdownOffset={{top:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0, justifyContent:'flex-start'}}  
          data={dataSt}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('status_perkawinan', val)} />
        <Text style={styles.TextError}>{this.state.ErrorSt}</Text>

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
        <Text style={styles.Text}> Tujuan Penggunaan Dana </Text>
        <Dropdown 
          dropdownOffset={{top:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0, justifyContent:'flex-start'}}  
          data={dataTp}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('tujuan_penggunaan_dana', val)} />
        <Text style={styles.TextError}>{this.state.ErrorTp}</Text>

        <Text style={styles.Text}> Sumber Dana </Text>
        <Dropdown 
          dropdownOffset={{top:0}}
          containerStyle={styles.container}
          inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom:0, justifyContent:'flex-start'}}  
          data={dataSd}
          fontSize={15}
          onChangeText={(val)=>this.handleChange('sumber_dana', val)} />
        <Text style={styles.TextError}>{this.state.ErrorSd}</Text>

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

        <Text style={styles.Text}> Nama Ibu Kandung  </Text>
        <InputForm  keyboardType='email' onChangeText={(val)=>this.handleChange('nama_ibu_kandung', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorIk}</Text>

        <Text style={styles.Text}> Alamat Email  </Text>
        <InputForm  keyboardType='email' onChangeText={(val)=>this.handleChange('alamat_email', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorAe}</Text>

        <Text style={styles.Text}> Nomor Hp </Text>
        <InputForm  keyboardType='numeric' onChangeText={(val)=>this.handleChange('telepon_hp_nomor', val)}></InputForm>
        <Text style={styles.TextError}>{this.state.ErrorHp}</Text>

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