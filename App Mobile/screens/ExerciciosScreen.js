import * as React from 'react';
import { TouchableOpacity, Linking, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';


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
        <ScrollView style={[styles.container,  {backgroundColor:'#ffffff', marginHorizontal:15, marginTop:15} ]}>

          <ItemExercicios title='[nome_do_exercício] - Dificuldade: Médio' data= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus felis. Etiam eu turpis condimentum, accumsan lorem quis, ultricies nisi. Fusce id est blandit, tempus mi et, facilisis augue. Phasellus quis pellentesque orci. Duis non lectus leo. Nam at ornare neque, a accumsan velit. Maecenas et magna nibh. Vivamus quis elit laoreet, dapibus est quis, placerat erat. ' url='https://www.youtube.com/watch?v=YCZd1eAPLq0'></ItemExercicios>
          <ItemExercicios title='[nome_do_exercício] - Dificuldade: Médio' data= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus felis. Etiam eu turpis condimentum, accumsan lorem quis, ultricies nisi. Fusce id est blandit, tempus mi et, facilisis augue. Phasellus quis pellentesque orci. Duis non lectus leo. Nam at ornare neque, a accumsan velit. Maecenas et magna nibh. Vivamus quis elit laoreet, dapibus est quis, placerat erat. ' url='https://google.com'></ItemExercicios>
          <ItemExercicios title='[nome_do_exercício] - Dificuldade: Médio' data= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus felis. Etiam eu turpis condimentum, accumsan lorem quis, ultricies nisi. Fusce id est blandit, tempus mi et, facilisis augue. Phasellus quis pellentesque orci. Duis non lectus leo. Nam at ornare neque, a accumsan velit. Maecenas et magna nibh. Vivamus quis elit laoreet, dapibus est quis, placerat erat. ' url='https://google.com'></ItemExercicios>
          <ItemExercicios title='[nome_do_exercício] - Dificuldade: Médio' data= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus felis. Etiam eu turpis condimentum, accumsan lorem quis, ultricies nisi. Fusce id est blandit, tempus mi et, facilisis augue. Phasellus quis pellentesque orci. Duis non lectus leo. Nam at ornare neque, a accumsan velit. Maecenas et magna nibh. Vivamus quis elit laoreet, dapibus est quis, placerat erat. ' url='https://google.com'></ItemExercicios>

        </ScrollView>
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

