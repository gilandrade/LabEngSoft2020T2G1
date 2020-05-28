import * as React from 'react';
import { Text, Image, ScrollView, View, StyleSheet } from 'react-native';

import contadorPassos from '../assets/controlePassos.png';
import medalha1 from '../assets/Medalha1.png';
import medalha2 from '../assets/Medalha2.png';
import form1 from '../assets/form.png';
import clap from '../assets/clap.png';
import achievment from '../assets/reward.png';
import doctor from '../assets/doctor.png';
import placeholderProgresso from '../assets/placeholder_progresso.png';
import { TouchableHighlight } from 'react-native-gesture-handler';


let porcentagemMeta = 63, quantPassos = 1415,metaPassos=2246, diasNaMeta=4;


function getUltimaConquista(){
  return '100 Mil passos!'
}
function getProxConsulta(){
  return '03/06/2020';
}
function getDias(){
  return 7;
}

const HomeScreen = () => {
    return (
      <ScrollView>
        <View style={{flex:1,alignItems:'center',backgroundColor:'#ffffff', marginHorizontal:15, marginTop:15}}>

            
            <Image source={placeholderProgresso}  style={[styles.itemMenuPrincipal, styles.progresso]}></Image>
            <Text style={styles.textoProgresso}> Você já completou {quantPassos} de {metaPassos} passos. Faltam {metaPassos-quantPassos}.</Text>

            

            <View style={{height:2, width:'80%',borderWidth:1, bottom:30,}}></View>

            <View style={[styles.itemMenuPrincipal, {height:80, width:'95%'} ]}>
                
                <Text style={{textAlign:'center',fontSize:18, padding:10,paddingLeft: 50, color:'#595959'}}> Você ainda precisa completar seu questionário semanal! </Text>
                <Image source={form1} style={{width:'10%', height:40, bottom:50,left:10,}}></Image>
            </View>

            <View style={[styles.itemMenuPrincipal, {height:80, } ]}>
                <Text style={{textAlign:'center',fontSize:18, padding:10,paddingLeft: 50,color:'#595959' }}>Você ja está a {diasNaMeta} dias cumprindo a sua meta! Parabéns!</Text>
                <Image source={clap} style={{width:'11%', height:40, bottom:50,left:10,}}></Image>
            </View>

            <View style={[styles.itemMenuPrincipal, {height:80, width:'95%'} ]}>
                <Text style={{textAlign:'center',fontSize:18, padding:10,paddingLeft: 50,color:'#595959' }}>Sua última conquista foi: </Text>
                <Text style={{textAlign:'center',fontSize:18, padding:0,paddingLeft: 50,color:'#595959'}}>"{getUltimaConquista()}" </Text>
                <Image source={achievment} style={{width:'12%', height:42, bottom:55,left:10,}}></Image>
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