import React, { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import form1 from '../assets/form.png';
import clap from '../assets/clap.png';
import achievment from '../assets/reward.png';
import doctor from '../assets/doctor.png';
import placeholderProgresso from '../assets/placeholder_progresso.png';
import { TouchableHighlight } from 'react-native-gesture-handler';

import ProgressCircle from 'react-native-progress-circle'


let quantPassos, metaPassos=1000, diasNaMeta=4;


function getUltimaConquista(){
  return '100 Mil passos!'
}
function getProxConsulta(){
  return '03/06/2020';
}
function getDias(){
  return 7;
}

function fazOFetch(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Daquisu/Calculo_Numerico/master/Passos2020-06-23.json')
        .then((response) => response.json())
        .then((json) => setData(json["activities-steps"][20]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

       quantPassos = isLoading ? 0 : parseFloat(data.value)
}

const notif = () => {
    if ((quantPassos/metaPassos)*100 >= 100) {
        return (
            <View style={[styles.itemMenuPrincipal, {height:80, width:'95%'} ]}>
                <Text style={{ textAlign:'center',fontSize:18, padding:10, paddingLeft: 50, color:'#595959'}}> Você completou sua meta diária! </Text>
                <Image source={form1} style={{width:'10%', height:40, bottom:50, left:10,}}></Image>
            </View>
        );
    }
}

const HomeScreen = () => {
    return (
      <ScrollView>
        {fazOFetch()}
        <View style={{flex:1, alignItems:'center',backgroundColor:'#ffffff', marginHorizontal:15, marginTop:15}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', margin:10}}>
                <ProgressCircle
                    percent={(quantPassos/metaPassos)*100}
                    radius={70}
                    borderWidth={8}
                    color="#99FF33"
                    shadowColor="#595959"
                    bgColor="#ffffff"
                >
                    <Text style={{ fontSize: 30 }}>{((quantPassos/metaPassos)*100).toFixed()}%</Text>
                </ProgressCircle>

                <View style={[styles.itemMenuPrincipal, {height:'90%', width:'50%'} ]}>
                    <Text style={{textAlign:'center', justifyContent:'center', fontSize:18, paddingTop:30, color:'#595959'}}> Você já completou {quantPassos} de {metaPassos} passos. Faltam {(metaPassos-quantPassos < 1) ? 0 : metaPassos-quantPassos}. </Text>
                </View>

            </View>
            
            <View style={{height:2, width:'80%', borderWidth:1, margin:30}}></View>

            {notif()}

            <View style={[styles.itemMenuPrincipal, {height:80, width:'95%'} ]}>
                <Text style={{textAlign:'center',fontSize:18, padding:10,paddingLeft: 50, color:'#595959'}}> Você ainda precisa completar seu questionário semanal! </Text>
                <Image source={form1} style={{width:'10%', height:40, bottom:50, left:10,}}></Image>
            </View>

            <View style={[styles.itemMenuPrincipal, {height:80, } ]}>
                <Text style={{textAlign:'center',fontSize:18, padding:10,paddingLeft: 50,color:'#595959' }}>Você ja está a {diasNaMeta} dias cumprindo a sua meta! Parabéns!</Text>
                <Image source={clap} style={{width:'11%', height:40, bottom:50,left:10,}}></Image>
            </View>

            <View style={[styles.itemMenuPrincipal, {height:80, width:'95%'} ]}>
                <Text style={{textAlign:'center',fontSize:18, padding:10,paddingLeft: 50,color:'#595959' }}>Sua próxima consulta será no dia {getProxConsulta()} (Daqui a {getDias()} dias) </Text>
                <Image source={doctor} style={{width:'13%', height:47, bottom:55,left:5,}}></Image>
            </View>
        </View>
      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    progresso:{
    
        width:'95%',
        height:200,
    },
    textoProgresso:{
        textAlign:'center',
        color:'#595959',
        fontSize:16,
        width:'50%',
        bottom:140,
        left:'20%',

    },
    itemMenuPrincipal:{ 
      width:'95%',
      margin:10,
      borderRadius:10,
      borderWidth:2,
      borderColor:'#595959',
      backgroundColor: '#99ff33',
    },

})