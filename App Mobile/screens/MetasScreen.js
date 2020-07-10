import * as React from 'react';
import { FlatList, ScrollView, Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const metaPassos = 5000;
const metaDias = 3;
const metaForms = 2;

let idx=0;
const vecNum = [1, 2, 3];
const metas = {
    'Pedro':[
        {meta:"Correr mais",
        cumprida:'Sim'},
        {meta:"Nadar",
        cumprida:'Sim'},
        {meta:"Parar de comer besteira",
        cumprida:'Não'},
        {meta:"Correr mais",
        cumprida:'Sim'},
        {meta:"Nadar",
        cumprida:'Sim'},
        {meta:"Parar de comer besteira",
        cumprida:'Não'},
        {meta:"Correr mais",
        cumprida:'Sim'},
        {meta:"Nadar",
        cumprida:'Sim'},
        {meta:"Parar de comer besteira",
        cumprida:'Não'},
        {meta:"Correr mais",
        cumprida:'Sim'},
        {meta:"Nadar",
        cumprida:'Sim'},
        {meta:"Parar de comer besteira",
        cumprida:'Não'},
        {meta:"Correr mais",
        cumprida:'Sim'},
        {meta:"Nadar",
        cumprida:'Sim'},
        {meta:"Parar de comer besteira",
        cumprida:'Não'},
        {meta:"Correr mais",
        cumprida:'Sim'},
        {meta:"Nadar",
        cumprida:'Sim'},
        {meta:"Parar de comer besteiraaa",
        cumprida:'Não'},
    ],
    

}


const MetasScreen = () => {
    return (
        <View style={{ backgroundColor:'#ffffff', marginHorizontal:15, marginTop:15, flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={styles.metasAtuais}>
                <Text style={[styles.tituloMetas,]}>Suas metas para esta semana:</Text>
                <FlatList
                data={metas['Pedro']}
                renderItem={({item}) => <Text style={styles.itemMeta}>&#x2B; {item.meta}</Text>}>   
                </FlatList>
            </View>
            
            

        </View>
    );
};

export default MetasScreen;

const styles = StyleSheet.create({
    bt:{
        backgroundColor:'#595959',
        borderWidth:0,
        borderRadius:10,
        width:'40%',
        },
    textbt:{
        textAlign:'center',
        color:'white',
        paddingVertical:12,
        paddingHorizontal:10, 
    },
    metasAtuais:{
        padding: 10,
        margin: 10,
        backgroundColor: '#99FF33',
        borderWidth: 2,
        borderColor: '#595959',
        borderRadius: 10,
    },
    itemMeta:{
        fontSize:20,
        color:'#595959',
    },
    tituloMetas:{
        fontSize:30,
        padding:5,
        textAlign:'center',
        color:'white',
        backgroundColor:'#595959',
        borderWidth:2,
        borderRadius:10,
        borderColor:'#595959',

    },
});