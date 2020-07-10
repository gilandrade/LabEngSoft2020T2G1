import * as React from 'react';
import {FlatList, TouchableOpacity, Linking, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';

const exercicios = {
  '203':[
    {
      tituloExercicio:'Supino declinado',
      descricaoExercicio:'Faz o supino declinado porra, seila, n tem mt o q explicar',
      linkExercicio:"https://www.youtube.com/watch?v=_Mxu9sYvRfc",
    },
    {
      tituloExercicio:'Supino declinado',
      descricaoExercicio:'Faz o supino declinado porra, seila, n tem mt o q explicar',
      linkExercicio:'https://www.youtube.com/watch?v=_Mxu9sYvRfc',
    },
    {
      tituloExercicio:'Supino declinado',
      descricaoExercicio:'Faz o supino declinado porra, seila, n tem mt o q explicar',
      linkExercicio:'https://www.youtube.com/watch?v=_Mxu9sYvRfc',
    },
  ]
}

function ItemExercicios(props){

  return(
    <View style={[styles.itemExercicios]}>
        <View style={[styles.itemExercicios, {margin:0, backgroundColor:'#595959', color:'#ffffff'}]}>
            <Text style={{color:'#ffffff'}}>{props.title}</Text>
        </View>
        <Text style={{color:'#595959', textAlign:'justify'}}>{props.data}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
            <Text style={{color: 'blue'}}>
                Clique aqui para assistir a um exemplo.
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const ExerciciosScreen = () => {
    return (
        <View style={[styles.container,  {backgroundColor:'#ffffff', marginHorizontal:15, marginTop:15} ]}>
            <FlatList
                data={exercicios['203']}
                renderItem={({item}) => <ItemExercicios title={item.tituloExercicio} data={item.descricaoExercicio} url={item.linkExercicio}></ItemExercicios>}>   
            </FlatList>
         
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 10
    },
    sectionHeader: {
      textAlign: 'justify',
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: 'gainsboro',
    },
    item: {
      textAlign: 'justify',
      padding: 10,
      fontSize: 14,
    },
    itemExercicios:{
      
      borderWidth:2,
      padding:10,
      margin:10,
      borderRadius:10,
      borderColor:'#595959',
      backgroundColor:'#99ff33',
  },
  })

export default ExerciciosScreen;

