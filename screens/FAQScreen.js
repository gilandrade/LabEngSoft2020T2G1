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
        <ItemFAQ title='Tosse' data= 'A tosse é uma reação involuntária e um dos principais sintomas da asma. Acontece mais frequentemente no período da noite ou de manhã cedo.'></ItemFAQ>
        <ItemFAQ title='Chiado no peito ou “gatinhos no peito”' data= 'O chiado no peito também pode ser chamado de “gatinhos no peito” ou “sibilância”, é um sintoma que acontece frequentemente quando os sintomas da asma pioram. O ruído (barulho) é agudo e acontece, principalmente, quando o ar entra nos pulmões. Isto acontece porque o tamanho dos brônquios (vias aéreas) diminui (broncoconstrição).'></ItemFAQ>
        <ItemFAQ title='Falta de ar: Sentiu falta de ar por causa da asma?' data= 'A falta de ar é a dificuldade de respirar. Algumas pessoas sentem como uma sensação de peso no peito, esforço para respirar e até mesmo quando não consegue respirar fundo. Acontece porque os brônquios (ou vias aéreas) se fecham e dificultam a passagem de ar. Muitas vezes vem junto com o chiado. Costuma aliviar quando usa a “bombinha” (broncodilatador).'></ItemFAQ>
        <ItemFAQ title='Problemas para dormir e acordar' data= 'Os sintomas da asma podem mudar a qualidade do seu sono. Uma noite mal dormida pode afetar as atividades do seu dia-a-dia e piorar os sintomas de asma. Por isso, é importante seguir o tratamento, buscando controlar os sintomas e melhorar as noites de sono.'></ItemFAQ>
        <ItemFAQ title='Bombinha (ou broncodilatador)' data= 'A “bombinha” (ou broncodilatador) é usado para aliviar os sintomas da asma. Para o medicamento fazer efeito, é importante seguir as orientações dos profissionais de saúde e usá-lo corretamente. O efeito da “bombinha” (ou broncodilatador) é relaxar os músculos dos brônquios (vias aéreas) e facilitar a passagem de ar e aliviar os sintomas.'></ItemFAQ>
        <ItemFAQ title='Pico de fluxo (ou peakflow)' data= 'Serve para medir a facilidade do ar passar nos brônquios (vias aéreas). É importante seguir as orientações dos profissionais da saúde e anotar o valor do pico de fluxo (ou peakflow) diariamente. Essas informações ajudarão o médico a escolher o melhor tratamento da sua asma.'></ItemFAQ>
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