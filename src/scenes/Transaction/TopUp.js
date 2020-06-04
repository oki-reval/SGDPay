import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { ButtonGradient, Input, Button, InputForm, Header } from '_atoms';
import { connect } from 'react-redux';
import { color, style } from '_styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

class TopUp extends React.Component {
  constructor(props) {
    super(props),
      this.state = {

        loading: false,
        currentPage: 0,
        UpDownIcon: true,
      }
  }



  handleChange = async (type, val) => {
    const user = Object.assign({}, this.state.user)
    user[type] = val
    this.setState({ user })
  }


  hanldeBackPress = () => {
    const currentPage = this.state.currentPage
    if (currentPage == 0) {
      this.props.navigation.goBack()
    } else {
      this.viewPager.setPage(currentPage - 1)
      this.setState({ currentPage: currentPage - 1 })
    }
  }

  render() {
    const { user, loading } = this.state

    return (
      <>
        <Header title='Top Up' onBackPress={this.hanldeBackPress} style={{ backgroundColor: color.primary }} />
        <View style={{ flex: 1 }}>
          <ViewPager style={styles.PageView} scrollEnabled={false} initialPage={0} ref={(viewPager) => { this.viewPager = viewPager }}>
            <View key="1" style={{ flex: 1 }}>
              <Text style={[styles.Text_welcome, { padding: 10 }]}> Metode Isi Ulang Saldo SGDPay </Text>
              <View style={[styles.card, style.shadow]}>
                <TouchableOpacity style={styles.action} onPress={() => { this.viewPager.setPage(1); this.setState({ currentPage: 1 }) }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/pos.png')} style={styles.logo} />
                    <Text style={styles.Text}> Pos Indonesia</Text>
                  </View>
                  <Icon name='chevron-right' size={20} style={styles.Icon} color={color.g400}></Icon>
                </TouchableOpacity>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5 }} />

                <TouchableOpacity style={styles.action} onPress={() => { this.viewPager.setPage(2); this.setState({ currentPage: 1 }) }} >
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/bni.png')} style={styles.logo} />
                    <Text style={styles.Text}> Bank BNI </Text>
                  </View>
                  <Icon name='chevron-right' size={20} style={styles.Icon} color={color.g400}></Icon>
                </TouchableOpacity>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5 }} />

                <TouchableOpacity style={styles.action} onPress={() => { this.viewPager.setPage(3); this.setState({ currentPage: 1 }) }} >
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/btn.png')} style={styles.logo} />
                    <Text style={styles.Text}> Bank BTN </Text>
                  </View>
                  <Icon name='chevron-right' size={20} style={styles.Icon} color={color.g400}></Icon>
                </TouchableOpacity>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5 }} />

                <TouchableOpacity style={styles.action} onPress={() => { this.viewPager.setPage(4); this.setState({ currentPage: 1 }) }} >
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/bca.png')} style={styles.logo} />
                    <Text style={styles.Text}> Bank BCA </Text>
                  </View>
                  <Icon name='chevron-right' size={20} style={styles.Icon} color={color.g400}></Icon>
                </TouchableOpacity>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5 }} />

                <TouchableOpacity style={styles.action} onPress={() => { this.viewPager.setPage(4); this.setState({ currentPage: 1 }) }} >
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/bni_syariah.png')} style={styles.logo} />
                    <Text style={styles.Text}> Bank BNI SYARIAH </Text>
                  </View>
                  <Icon name='chevron-right' size={20} style={styles.Icon} color={color.g400}></Icon>
                </TouchableOpacity>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5 }} />

                <TouchableOpacity style={styles.action} onPress={() => { this.viewPager.setPage(4); this.setState({ currentPage: 1 }) }} >
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/mandiiri.png')} style={styles.logo} />
                    <Text style={styles.Text}> Bank MANDIRI </Text>
                  </View>
                  <Icon name='chevron-right' size={20} style={styles.Icon} color={color.g400}></Icon>
                </TouchableOpacity>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5 }} />
              </View>
            </View>

            <View key="2" style={{ flex: 1 }}>
              <View style={[styles.card, style.shadow]}>
                <View style={styles.action}>

                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/pos.png')} style={styles.logo} />
                    <Text style={styles.Text}> Pos Indonesia</Text>
                  </View>
                  <Icon name='chevron-down' size={20} style={styles.Icon} color={color.g400}></Icon>

                </View>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5, marginBottom: 5 }} />
                <View style={styles.keterangan}>
                  <Text style={{ marginVertical: 2 }}>1. Datang ke <Text style={{ fontWeight: "bold" }}>kantorpos</Text> terdekat </Text>
                  <Text style={{ marginVertical: 2 }}>2. Ambil formulir penambahan saldo </Text>
                  <Text style={{ marginVertical: 2 }}>3. Isikan <Text style={{ fontWeight: "bold" }}>0100031467</Text>  sebagai rekening tujuan </Text>
                  <Text style={{ marginVertical: 2 }}>4. Siapkan jumlah Top Up yang akan dibayarkan </Text>
                  <Text style={{ marginVertical: 2 }}>5. Berikan formulir dan uang kepada petugas </Text>
                  <Text style={{ marginVertical: 2, marginTop: 10 }}>Catatan : </Text>
                  <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Minimum transaksi Top Up adalah Rp.10.000 </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={[styles.card, style.shadow]}>
                <View style={styles.action}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/bni.png')} style={styles.logo} />
                    <Text style={styles.Text}> Bank BNI</Text>
                  </View>
                  <Icon name='chevron-down' size={20} style={styles.Icon} color={color.g400}></Icon>
                </View>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5, marginBottom: 5 }} />
                <View style={styles.keterangan}>
                  <Collapse >
                    <CollapseHeader style={styles.action} onPress={this.changeImage}>
                      <Text>ATM BNI</Text>
                      <Icon style={styles.Icon} name='chevron-down'></Icon>
                    </CollapseHeader>
                    <CollapseBody style={{ backgroundColor: 'white', padding: 5 }}>
                      <Text style={{ marginVertical: 2 }}>1. Masukan kartu ATM dan PIN BNI Anda </Text>
                      <Text style={{ marginVertical: 2 }}>2. Pilih menu <Text style={{ fontWeight: "bold" }}>TRANSFER ANTAR BNI</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>3. Masukan <Text style={{ fontWeight: "bold" }}>8161090100031467</Text>  sebagai rekening tujuan </Text>
                      <Text style={{ marginVertical: 2 }}>4. Masukan jumlah top up yang dibayarkan </Text>
                      <Text style={{ marginVertical: 2 }}>5. ikuti intruksi untuk menyelesaikan transaksi </Text>
                      <Text style={{ marginVertical: 2, marginTop: 10, fontWeight: 'bold' }}>Catatan : </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Minimum transaksi Top Up adalah Rp 10.000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  penambahan Saldo Giro dikenakan bea admin sebesar Rp 2000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Top up tidak bisa dilakukan, jika nominal top up setelah dikurangi biaya admin Rp 10.000 </Text>
                    </CollapseBody>
                  </Collapse>
                  <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginBottom: 5 }}></View>
                  <Collapse>
                    <CollapseHeader style={styles.action} onPress={this.changeImage}>
                      <Text>Internet Banking BNI</Text>
                      <Icon style={styles.Icon} name='chevron-down'></Icon>
                    </CollapseHeader>
                    <CollapseBody style={{ backgroundColor: 'white', padding: 5 }}>
                      <Text style={{ marginVertical: 2 }}>1. Masuk ke website<Text style={{ fontWeight: "bold" }}>INTERNET BANKING BNI</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>2. Pilih menu <Text style={{ fontWeight: "bold" }}>TRANSAKSI > TRANSFER ANTAR BNI</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>3. Masukan <Text style={{ fontWeight: "bold" }}>8161090100031467</Text> sebagai nomor VA/nomor Billing </Text>
                      <Text style={{ marginVertical: 2 }}>4. Masukan jumlah top up yang dibayarkan </Text>
                      <Text style={{ marginVertical: 2 }}>5. ikuti intruksi untuk menyelesaikan transaksi </Text>
                      <Text style={{ marginVertical: 2, marginTop: 10, fontWeight: 'bold' }}>Catatan : </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Minimum transaksi Top Up adalah Rp 10.000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  penambahan Saldo Giro dikenakan bea admin sebesar Rp 2000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Top up tidak bisa dilakukan, jika nominal top up setelah dikurangi biaya admin Rp 10.000 </Text>
                    </CollapseBody>
                  </Collapse>
                  <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginBottom: 5 }}></View>
                  <Collapse>
                    <CollapseHeader style={styles.action} onPress={this.changeImage}>
                      <Text>SMS BANKING (BNI MOBILE)</Text>
                      <Icon style={styles.Icon} name='chevron-down'></Icon>
                    </CollapseHeader>
                    <CollapseBody style={{ backgroundColor: 'white', padding: 5 }}>
                      <Text style={{ marginVertical: 2 }}>1. Masuk ke aplikas mobile<Text style={{ fontWeight: "bold" }}>BNI SMS BANKING</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>2. Pilih menu <Text style={{ fontWeight: "bold" }}>TRANSFER ANTAR BNI</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>3. Masukan <Text style={{ fontWeight: "bold" }}>8161090100031467</Text>  sebagai rekening tujuan </Text>
                      <Text style={{ marginVertical: 2 }}>4. Masukan jumlah top up yang dibayarkan </Text>
                      <Text style={{ marginVertical: 2 }}>5. ikuti intruksi untuk menyelesaikan transaksi </Text>
                      <Text style={{ marginVertical: 2, marginTop: 10, fontWeight: 'bold' }}>Catatan : </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Minimum transaksi Top Up adalah Rp 10.000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  penambahan Saldo Giro dikenakan bea admin sebesar Rp 2000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Top up tidak bisa dilakukan, jika nominal top up setelah dikurangi biaya admin Rp 10.000 </Text>
                    </CollapseBody>
                  </Collapse>
                  <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginBottom: 5 }}></View>
                </View>
              </View>
            </View>

            <View>
              <View style={[styles.card, style.shadow]}>
                <View style={styles.action}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('_assets/icons/bni.png')} style={styles.logo} />
                    <Text style={styles.Text}> Bank BNI</Text>
                  </View>
                  <Icon name='chevron-down' size={20} style={styles.Icon} color={color.g400}></Icon>
                </View>
                <View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginTop: 5, marginBottom: 5 }} />
                <View style={styles.keterangan}>
                  <Collapse >
                    <CollapseHeader style={styles.action} onPress={this.changeImage}>
                      <Text>ATM BNI</Text>
                      <Icon style={styles.Icon} name='chevron-down'></Icon>
                    </CollapseHeader>
                    <CollapseBody style={{ backgroundColor: 'white', padding: 5 }}>
                      <Text style={{ marginVertical: 2 }}>1. Masukan kartu ATM dan PIN BNI Anda </Text>
                      <Text style={{ marginVertical: 2 }}>2. Pilih menu <Text style={{ fontWeight: "bold" }}>TRANSFER ANTAR BNI</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>3. Masukan <Text style={{ fontWeight: "bold" }}>8161090100031467</Text>  sebagai rekening tujuan </Text>
                      <Text style={{ marginVertical: 2 }}>4. Masukan jumlah top up yang dibayarkan </Text>
                      <Text style={{ marginVertical: 2 }}>5. ikuti intruksi untuk menyelesaikan transaksi </Text>
                      <Text style={{ marginVertical: 2, marginTop: 10, fontWeight: 'bold' }}>Catatan : </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Minimum transaksi Top Up adalah Rp 10.000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  penambahan Saldo Giro dikenakan bea admin sebesar Rp 2000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Top up tidak bisa dilakukan, jika nominal top up setelah dikurangi biaya admin Rp 10.000 </Text>
                    </CollapseBody>
                  </Collapse>
                  <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginBottom: 5 }}></View>
                  <Collapse>
                    <CollapseHeader style={styles.action} onPress={this.changeImage}>
                      <Text>Internet Banking BNI</Text>
                      <Icon style={styles.Icon} name='chevron-down'></Icon>
                    </CollapseHeader>
                    <CollapseBody style={{ backgroundColor: 'white', padding: 5 }}>
                      <Text style={{ marginVertical: 2 }}>1. Masuk ke website<Text style={{ fontWeight: "bold" }}>INTERNET BANKING BNI</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>2. Pilih menu <Text style={{ fontWeight: "bold" }}>TRANSAKSI > TRANSFER ANTAR BNI</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>3. Masukan <Text style={{ fontWeight: "bold" }}>8161090100031467</Text> sebagai nomor VA/nomor Billing </Text>
                      <Text style={{ marginVertical: 2 }}>4. Masukan jumlah top up yang dibayarkan </Text>
                      <Text style={{ marginVertical: 2 }}>5. ikuti intruksi untuk menyelesaikan transaksi </Text>
                      <Text style={{ marginVertical: 2, marginTop: 10, fontWeight: 'bold' }}>Catatan : </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Minimum transaksi Top Up adalah Rp 10.000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  penambahan Saldo Giro dikenakan bea admin sebesar Rp 2000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Top up tidak bisa dilakukan, jika nominal top up setelah dikurangi biaya admin Rp 10.000 </Text>
                    </CollapseBody>
                  </Collapse>
                  <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginBottom: 5 }}></View>
                  <Collapse>
                    <CollapseHeader style={styles.action} onPress={this.changeImage}>
                      <Text>SMS (BNI MOBILE)</Text>
                      <Icon style={styles.Icon} name='chevron-down'></Icon>
                    </CollapseHeader>
                    <CollapseBody style={{ backgroundColor: 'white', padding: 5 }}>
                      <Text style={{ marginVertical: 2 }}>1. Masuk ke aplikas mobile<Text style={{ fontWeight: "bold" }}>BNI SMS BANKING</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>2. Pilih menu <Text style={{ fontWeight: "bold" }}>TRANSFER ANTAR BNI</Text> </Text>
                      <Text style={{ marginVertical: 2 }}>3. Masukan <Text style={{ fontWeight: "bold" }}>8161090100031467</Text>  sebagai rekening tujuan </Text>
                      <Text style={{ marginVertical: 2 }}>4. Masukan jumlah top up yang dibayarkan </Text>
                      <Text style={{ marginVertical: 2 }}>5. ikuti intruksi untuk menyelesaikan transaksi </Text>
                      <Text style={{ marginVertical: 2, marginTop: 10, fontWeight: 'bold' }}>Catatan : </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Minimum transaksi Top Up adalah Rp 10.000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  penambahan Saldo Giro dikenakan bea admin sebesar Rp 2000 </Text>
                      <Text style={{ marginVertical: 2, marginTop: 5 }}><Icon name='circle' size={15} style={[styles.Icon]} color={color.g400}></Icon>  Top up tidak bisa dilakukan, jika nominal top up setelah dikurangi biaya admin Rp 10.000 </Text>
                    </CollapseBody>
                  </Collapse>
                  <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginBottom: 5 }}></View>
                </View>
              </View>
            </View>

          </ViewPager>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  PageView: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  Text_welcome: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: 'black',
  },
  Text: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'black',
    marginLeft: 5
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  action: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  logo: {
    height: 40,
    width: 70,
    resizeMode: 'stretch'
  },
  Icon: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    padding: 10
  },
  IconEl: {
    //alignSelf: 'center',
    justifyContent: 'center',
    //padding: 10
  },
  keterangan: {
    backgroundColor: color.g200,
    padding: 10
  }

});

const mapStateToProps = state => {
  return {
    user: state.user.data,
    wallet: state.user.wallet
  }
}

const MenuBca = [
  {
    title: 'ATM BCA',
    cotent: ' 1. Masukan Kartu ATM '
  }
]

export default connect(mapStateToProps)(TopUp);