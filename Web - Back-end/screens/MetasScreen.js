import * as React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const metaPassos = 5000;
const metaDias = 3;
const metaForms = 2;

const MetasScreen = () => {
    return (
        <View style={{ backgroundColor:'#ffffff', marginHorizontal:15, marginTop:15, flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={styles.metasAtuais}>
                <Text style={{padding: 5, fontSize: 21}}>Suas metas para esta semana:</Text>
                <Text style={{padding: 5, fontSize: 17}}>
                    <Text>Caminhe </Text>
                    <Text style={{color: 'white', fontWeight: "bold"}}>{metaPassos} </Text>
                    <Text>passos por dia em </Text>
                    <Text style={{color: 'white', fontWeight: "bold"}}>{metaDias} </Text>
                    <Text>dias desta semana.</Text>
                </Text>
                <Text style={{padding: 5, fontSize: 17}}>
                    <Text>
                        Responda os formulários diários todos os dias por {metaForms} semanas.
                    </Text>
                </Text>
            </View>
            <View style={{ top: 100 }}>
                <Text style={{ padding: 10, fontSize: 15 }}>Deseja modificar suas metas? Toque no botão abaixo:</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TextInput
                        style={{ padding: 10, width: '45%', height: 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder = 'Passos por dia'
                    />
                    <TextInput
                        style={{ padding: 10, width: '45%', height: 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder = 'Dias ativos'
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={[styles.bt, {borderWidth: 0, top: 10, }]} >
                        <Text style={styles.textbt}>Alterar metas</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default MetasScreen;

const styles = StyleSheet.create({
    bt:{
        backgroundColor:'#99FF33',
        borderWidth:0,
        borderRadius:10,
        width:'40%',
        height:50,
        },
    textbt:{
        textAlign:'center',
        color:'black',
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
});