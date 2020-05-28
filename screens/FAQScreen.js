import * as React from 'react';
import { ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';


function ItemFAQ(props){

  return(
    <View style={[styles.itemFAQ]}>
        <View style={[styles.itemFAQ, {margin:0, backgroundColor:'#595959', color:'#ffffff'}]}>
            <Text style={{color:'#ffffff'}}>{props.title}</Text>
        </View>
        <Text style={{color:'#595959', textAlign:'justify'}}>{props.data}</Text>
    </View>
  );
}


const FAQScreen = () => {
    return (
      <ScrollView style={[styles.container, {backgroundColor:'#ffffff', marginHorizontal:15, marginTop:15}]}>
        <ItemFAQ title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' data= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus felis. Etiam eu turpis condimentum, accumsan lorem quis, ultricies nisi. Fusce id est blandit, tempus mi et, facilisis augue. Phasellus quis pellentesque orci. Duis non lectus leo. Nam at ornare neque, a accumsan velit. Maecenas et magna nibh. Vivamus quis elit laoreet, dapibus est quis, placerat erat.'></ItemFAQ>
        <ItemFAQ title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' data= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus felis. Etiam eu turpis condimentum, accumsan lorem quis, ultricies nisi. Fusce id est blandit, tempus mi et, facilisis augue. Phasellus quis pellentesque orci. Duis non lectus leo. Nam at ornare neque, a accumsan velit. Maecenas et magna nibh. Vivamus quis elit laoreet, dapibus est quis, placerat erat.'></ItemFAQ>
        <ItemFAQ title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' data= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus felis. Etiam eu turpis condimentum, accumsan lorem quis, ultricies nisi. Fusce id est blandit, tempus mi et, facilisis augue. Phasellus quis pellentesque orci. Duis non lectus leo. Nam at ornare neque, a accumsan velit. Maecenas et magna nibh. Vivamus quis elit laoreet, dapibus est quis, placerat erat.'></ItemFAQ>
        <ItemFAQ title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' data= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus felis. Etiam eu turpis condimentum, accumsan lorem quis, ultricies nisi. Fusce id est blandit, tempus mi et, facilisis augue. Phasellus quis pellentesque orci. Duis non lectus leo. Nam at ornare neque, a accumsan velit. Maecenas et magna nibh. Vivamus quis elit laoreet, dapibus est quis, placerat erat.'></ItemFAQ>
        
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#ffffff',
      padding:5,
      flex: 1,
      paddingTop: 10,
      
    },
    sectionHeader: {
      textAlign: 'justify',
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: 'gainsboro',
    },
    item: {
      textAlign: 'justify',
      padding: 10,
      fontSize: 14,
    },
    itemFAQ:{
      
      borderWidth:2,
      padding:10,
      margin:10,
      borderRadius:10,
      borderColor:'#595959',
      backgroundColor:'#99ff33',
  },
  })

export default FAQScreen;