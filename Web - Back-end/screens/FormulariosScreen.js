import React, {useState} from 'react';
import { Text, View , Button, StyleSheet, CheckBox, Image, TouchableOpacity} from 'react-native';

import {CheckBoxCinco, CheckBoxZeroSeis, CheckBoxDois} from './modulos_extra/CheckboxPersonalizada.js'

import tosse from '../assets/tosse.png'
import chiado from '../assets/chiado.png'
import faltadear from '../assets/faltadear.png'
import acordar from '../assets/acordar.png'
import bombinha from '../assets/bombinha.png'
import peak_flow from '../assets/peak_flow.png'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const fezDiario =true, fezSemanal=false;
const submitForm = () => {let a = 2;}

function ItemFormVF(props){
    
    return(
        <View style={[styles.itemQuestionario,{ flexDirection:'row'}]}>
            <Image style={{ width:100, height:100,}}source={props.src}></Image>
            
            <View style={{ flexDirection:'column', alignItems:'flex-start', left:'35%',}}>
                
                <Text style ={{fontSize:27, color:'#595959'}}>{props.name}</Text>
                <CheckBoxDois title1='Sim' title2='Não'></CheckBoxDois>
                
            </View>
        </View>
    )
}

function ItemFormPeak(props){
    
    return(
        <View style={[styles.itemQuestionario,{ flexDirection:'row'}]}>
            <Image style={{ width:100, height:100,}}source={props.src}></Image>
            
            <View style={{ flexDirection:'column', alignItems:'space-between', left:'35%',}}>
                
                <Text style ={{fontSize:20, color:'#595959'}}>{props.name}</Text>
                <View style={{ flexDirection:'row', justifyContent:'flex-start', top:'5%',}}>
                    <View style={{flex:1}}>
                        <TextInput keyboardType='decimal-pad' placeholder='Digite aqui...' style={{justifyContent:'space-around', borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>
                    </View>
                    <View style={{flex:1}}>    
                        <TextInput keyboardType='decimal-pad' placeholder='Digite aqui...' style={{justifyContent:'space-around', borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>
                    </View>
                    <View style={{flex:1}}>    
                        <TextInput keyboardType='decimal-pad' placeholder='Digite aqui...' style={{justifyContent:'space-around', borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>
                    </View>
                </View>
            </View>
        </View>
    )
}

function ItemFormSemanal(props){
    return(
        <View style={[styles.itemQuestionario, {alignItems:'flex-start'}]}>
            <Text style={{textAlign:'center' , color:'#595959' }}>{props.pergunta}</Text>
            <View style={{flexDirection:'column', left:'5%',}}>
                
                <CheckBoxZeroSeis title0={props.title0} title1={props.title1} title2={props.title2} title3={props.title3} 
                              title4={props.title4} title5={props.title5} title6={props.title6}></CheckBoxZeroSeis>
                
            </View>
        </View>
    );
}

function ItemFormBarreiras(props){
    return(
        <View style={[styles.itemQuestionario, {alignItems:'center'}]}>
            <Text style={{textAlign:'center', color:'#595959'}}>{props.afirmacao}</Text> 
            <CheckBoxCinco></CheckBoxCinco>
        </View>
    );
}


function formularioSintomas(){
    let srcs = [tosse, chiado, faltadear, acordar, bombinha, peak_flow];
    let names = ['Tosse', 'Chiado', 'Falta de Ar', 'Acordar ', 'Bombinha', 'Peak Flow (opcional)'];
    return(
        
            <View style={{flex:1,}}>
                
                <Text style = {[styles.tituloQuestionario, { top:20,}]}>Questionário de controle de ASMA - ACQ (Diário) </Text>
                <Text style = {[{fontSize:15, textAlign:'center', top:20,}, (fezDiario ? {color:'green'} : {color:'red'}) ]}> Você {fezDiario ? "já fez " : 'ainda não fez'} seu questionário diário hoje!</Text>
                <Text style = {{ fontSize:20, top:30, textAlign:'center'}}>Marque caso tenha tido algum destes sintomas hoje!</Text>
                <View style={{top:40,}}>
                    <ItemFormVF name={names[0]} src={srcs[0]} ></ItemFormVF>
                    <ItemFormVF name={names[1]} src={srcs[1]} ></ItemFormVF>
                    <ItemFormVF name={names[2]} src={srcs[2]} ></ItemFormVF>
                    <ItemFormVF name={names[3]} src={srcs[3]} ></ItemFormVF>
                    <ItemFormVF name={names[4]} src={srcs[4]} ></ItemFormVF>
                    <ItemFormPeak name={names[5]} src={srcs[5]} ></ItemFormPeak>
                </View>

                <View style={[styles.bt, {backgroundColor:'red' ,top:40, margin:20,left:70,}]}>
                    <TouchableOpacity onPress={submitForm()} title='Enviar'><Text style={{color:'white', textAlign:'center', fontSize:26}}>Enviar</Text></TouchableOpacity>
                </View>
                
                <Text style = {[styles.tituloQuestionario, { top:30,}]}>Escala de sintomas (Semanal)</Text>
                <Text style = {[{fontSize:15, textAlign:'center', top:30,}, (fezSemanal ? {color:'green'} : {color:'red'}) ]}> Você {fezSemanal ? "já fez " : 'ainda não fez'} seu questionário semanal!</Text>
                <Text style = {{ fontSize:20, top:30, textAlign:'center'}}>Escolha apenas uma das opções.</Text>

                <View style={{top:40,}}>
                    <ItemFormSemanal pergunta='1. Em média, durante os últimos sete dias, o quão frequentemente você se acordou por causa de sua asma, durante a noite?  '
                    title0={` 0) Nunca`} title1={` 1) Quase nunca `} 
                    title2={` 2) Poucas vezes `} title3={` 3) Várias vezes `}
                    title4={` 4) Muitas vezes`} title5={` 5) Muitíssimas vezes `} title6={` 6) Incapaz de dormir devido a asma`}></ItemFormSemanal>   
                    
                    <ItemFormSemanal pergunta='2. Em média, durante os últimos sete dias, o quão ruins foram os seus sintomas da asma, quando você acordou pela manhã? '
                    title0={` 0) Sem sintomas`} title1={` 1) Sintomas muito leves`} 
                    title2={` 2) Sintomas leves `} title3={` 3) Sintomas moderados`}
                    title4={` 4) Sintomas um tanto graves `} title5={` 5) Sintomas graves `} title6={` 6) Sintomas muito graves`}></ItemFormSemanal>
                    
                    <ItemFormSemanal pergunta='3. De um modo geral, durante os últimos sete dias, o quão limitado você tem estado em suas atividades por causa de sua asma? '
                    title0={` 0) Nada limitado `} title1={` 1) Muito pouco limitado `} 
                    title2={` 2) Pouco limitado `} title3={` 3) moderadamente limitado`}
                    title4={` 4) Muito limitado`} title5={` 5) Extremamente limitado `} title6={` 6) Totalmente limitado`}></ItemFormSemanal>
                    
                    <ItemFormSemanal pergunta='4. De um modo geral, durante os últimos sete dias, o quanto de falta de ar você teve por causa de sua asma?'
                    title0={` 0) Nenhuma `} title1={` 1) Muito pouca `} 
                    title2={` 2) Alguma`} title3={` 3) Moderada`}
                    title4={` 4) Bastante`} title5={` 5) Muita`} title6={` 6) Muitíssima `}></ItemFormSemanal>
                    
                    <ItemFormSemanal pergunta='5. De um modo geral, durante os últimos sete dias, quanto tempo você teve chiado? '
                    title0={` 0) Nunca`} title1={` 1) Quase nunca`} 
                    title2={` 2) Pouco tempo `} title3={` 3) Algum tempo `}
                    title4={` 4) Bastante tempo`} title5={` 5) Quase sempre`} title6={` 6) Sempre `}></ItemFormSemanal>
                    
                    <ItemFormSemanal pergunta='6. Em média, durante os últimos sete dias, quantos jatos de broncodilatador de resgate (Sabutamol, Fenoterol, etc) você usou por dia?'
                    title0={` 0) Nenhum`} title1={` 1) 1-2 jatos na maior parte dos dias `} 
                    title2={` 2) 3-4 jatos na maior parte dos dias `} title3={` 3) 5-8 jatos na maior parte dos dias`}
                    title4={` 4) 9-12 jatos na maior parte dos dias `} title5={` 5) 13-16 jatos na maior parte dos dias `} title6={` 6) Mais de 16 jatos por dia `}></ItemFormSemanal>
                    
                    <ItemFormSemanal pergunta='7. VEF1 pré broncodilatador ______ VEF1 previsto ______ VEF1 % previsto'
                    title0={` 0) > 95% do previsto`} title1={` 1) 95-90% do previsto `} 
                    title2={` 2) 89-80% do previsto`} title3={` 3) 79-70% do previsto `}
                    title4={` 4) 69-60% do previsto`} title5={` 5) 59-50% do previsto`} title6={` 6) < 50% do previsto `}></ItemFormSemanal>
                </View>
                
                <View style={[styles.bt, {backgroundColor:'red' ,top:40, margin:20,left:70,}]}>
                    <TouchableOpacity onPress={submitForm()} title='Enviar'><Text style={{color:'white', textAlign:'center', fontSize:26}}>Enviar</Text></TouchableOpacity>
                </View>

                <View style={{height:100,}}>

                </View>
            </View>
    );
}

function formularioBarreiras(){
    return(
        <View >
            <View>
                <Text style={styles.tituloQuestionario}>Fatores pessoais (intrínseco)</Text>
                
                <ItemFormBarreiras afirmacao='Eu sinto que não tenho energia'></ItemFormBarreiras> 
                <ItemFormBarreiras afirmacao='Eu tenho limitações físicas (musculares e/ou articulares)'></ItemFormBarreiras> 
                <ItemFormBarreiras afirmacao='A minha doença que me impede de me exercitar'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu tenho excesso de peso'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu tenho preguiça'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu tenho medo de me machucar'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu tenho vergonha (aparência física, timidez…)'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu tenho medo de sentir falta de ar'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu não tenho tempo (trabalho, compromisso…)'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu não tenho interesse/não gosto de praticar exercício'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu não acredito nos benefícios na atividade física'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu não tenho dinheiro para fazer exercício'></ItemFormBarreiras>

            </View>
            <View>
                <Text style={styles.tituloQuestionario}>Fatores ambientais (extrínseco)</Text>
                
                <ItemFormBarreiras afirmacao='Eu não tenho companhia para ir comigo (amigos/família)'></ItemFormBarreiras>
                <ItemFormBarreiras afirmacao='Eu não tenho incentivo da família e/ou amigos'></ItemFormBarreiras> 
                <ItemFormBarreiras afirmacao='Eu não tenho conhecimento e/ou orientação'></ItemFormBarreiras> 
                <ItemFormBarreiras afirmacao='Eu não tenho suporte profissional'></ItemFormBarreiras> 
                <ItemFormBarreiras afirmacao='Não pratico por causa do clima (calor, vento chuva, frio…)'></ItemFormBarreiras> 
                <ItemFormBarreiras afirmacao='Falta de espaço disponível para eu realizar exercício'></ItemFormBarreiras> 
                <ItemFormBarreiras afirmacao='Falta de ambiente seguro para eu realizar exercício'></ItemFormBarreiras> 
                <ItemFormBarreiras afirmacao='Falta de equipamento disponível para eu realizar exercício'></ItemFormBarreiras>
                <View style={[styles.itemQuestionario, {alignItems:'center'}]}>
                    <Text style={{textAlign:'center', color:'#595959'}}>Outros (Digite o motivo abaixo)</Text>
                    <TextInput placeholder='Digite aqui...' style={{borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>
                    <CheckBoxCinco></CheckBoxCinco>
                   
                </View>

                <View style={[styles.bt, {backgroundColor:'red' ,top:0, margin:20,left:70,}]}>
                    <TouchableOpacity onPress={submitForm()} title='Enviar'><Text style={{color:'white', textAlign:'center', fontSize:26}}>Enviar</Text></TouchableOpacity>
                </View>
                  
            </View>
            <View >
                <Text style={[styles.tituloQuestionario]}>Cite 5 atividades que você mais sente falta de ar ou cansaço durante o seu dia a dia em ordem decrescente (do maior para o menor)</Text>
                <View style={[styles.itemQuestionario,{margin:10, }]}>
                    <Text style={{height:20,margin:5,}}>1)</Text>
                    <TextInput placeholder='  Digite aqui...' style={{borderWidth:1, height:40,backgroundColor:'#ffffff'}}></TextInput>
                    <Text style={{height:20,margin:5,}}>2)</Text>
                    <TextInput placeholder='  Digite aqui...' style={{borderWidth:1, height:40,backgroundColor:'#ffffff'}}></TextInput>
                    <Text style={{height:20,margin:5,}}>3)</Text>
                    <TextInput placeholder='  Digite aqui...' style={{borderWidth:1, height:40,backgroundColor:'#ffffff'}}></TextInput>
                    <Text style={{height:20,margin:5,}}>4)</Text>
                    <TextInput placeholder='  Digite aqui...' style={{borderWidth:1, height:40,backgroundColor:'#ffffff'}}></TextInput>
                    <Text style={{height:20,margin:5,}}>5)</Text>
                    <TextInput placeholder='  Digite aqui...' style={{borderWidth:1, height:40,backgroundColor:'#ffffff'}}></TextInput>
                </View>

                <View style={[styles.bt, {backgroundColor:'red' ,top:0, margin:20,left:70,}]}>
                    <TouchableOpacity onPress={submitForm()} title='Enviar'><Text style={{color:'white', textAlign:'center', fontSize:26}}>Enviar</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    );
}



const FormulariosScreen = () => {
    const [sintomas, setSintomas] = useState(true);
    
    
    return (
        <View style={{flex:1,  marginHorizontal:15, marginTop:15}} >
            <ScrollView style={{backgroundColor:'#ffffff',}}>
                <View style={{marginHorizontal:2,height:72, justifyContent:'space-between', flexDirection:'row'}} >
                
                    <TouchableOpacity style={[styles.bt, {top:10,left:'10%', }]} onPress={()=>setSintomas(true) }>
                        <Text style={styles.textbt}>Questionário de controle de Asma</Text>
                    </TouchableOpacity>
                
                    
                    <TouchableOpacity style={[styles.bt, {top:10,right:'10%',}]} onPress={()=>setSintomas(false) }>
                        <Text style={styles.textbt}>Barreiras</Text>
                    </TouchableOpacity>
                
                </View>
            
                <View >
                    {sintomas ? formularioSintomas()  : formularioBarreiras() }
                </View>
                
            </ScrollView>

        </View>
        
    );
};

export default FormulariosScreen;  

const styles = StyleSheet.create({
    bt:{
        backgroundColor:'#99ff33',
        borderWidth:1,
        borderColor:'#595959', 
        borderRadius:10,
        width:'47%',
        height:50,
        },
    textbt:{
        textAlign:'center',
        color:'#595959',
        paddingVertical:5,
        paddingHorizontal:10, 
    },
    itemQuestionario:{
        flex:1,
        borderWidth:2,
        padding:10,
        margin:10,
        borderRadius:10,
        borderColor:'#595959',
        backgroundColor:'#99ff33',
    },
    tituloQuestionario:{
        color:'#ffffff',
        padding: 30,
        margin:5,
        borderWidth:2, 
        borderRadius:5, 
        borderColor:'#ffffff',
        backgroundColor:'#595959',
        fontSize:20,
        textAlign:'center',
    },
   
});