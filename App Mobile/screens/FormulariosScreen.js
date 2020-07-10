import React, {useState} from 'react';
import { Text, View , Button, StyleSheet, CheckBox, Image, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';



import tosse from '../assets/tosse.png'
import chiado from '../assets/chiado.png'
import faltadear from '../assets/faltadear.png'
import acordar from '../assets/acordar.png'
import bombinha from '../assets/bombinha.png'
import peak_flow from '../assets/peak_flow.png'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const fezDiario =true, fezSemanal=false;
const submitForm = () => {let a = 2;}


const objEnvio = {
    IDUsuario:10,
    formularioEnviado:false,
    ACQ:{
        Tosse:{
            'valor':false,
        },
        Chiado:{
            'valor':false,
        },
        FaltaDeAr:{
            'valor':false,
        },
        Acordar:{
            'valor':false,
        },
        Bombinha:{
            'valor':false,
        },
        Peakflow:{
            valorUm: 0,
            valorDois:0 ,
            valorTres:0 ,
        }
    },
    EscalaSintomas:{
        pergunta0:{
            titulo:'1. Em média, durante os últimos sete dias, o quão frequentemente você se acordou por causa de sua asma, durante a noite?  ' ,
            selecionada:null ,
        },
        pergunta1:{
            titulo:'2. Em média, durante os últimos sete dias, o quão ruins foram os seus sintomas da asma, quando você acordou pela manhã? ',
            selecionada:null ,
        },
        pergunta2:{
            titulo:'3. De um modo geral, durante os últimos sete dias, o quão limitado você tem estado em suas atividades por causa de sua asma? ',
            selecionada:null ,
        },
        pergunta3:{
            titulo:'4. De um modo geral, durante os últimos sete dias, o quanto de falta de ar você teve por causa de sua asma?' ,
            selecionada:null ,
        },
        pergunta4:{
            titulo:'5. De um modo geral, durante os últimos sete dias, quanto tempo você teve chiado? ' ,
            selecionada:null ,
        },
        pergunta5:{
            titulo:'6. Em média, durante os últimos sete dias, quantos jatos de broncodilatador de resgate (Sabutamol, Fenoterol, etc) você usou por dia?' ,
            selecionada:null ,
        },
        pergunta6:{
            titulo:'7. VEF1 pré broncodilatador ______ VEF1 previsto ______ VEF1 % previsto',
            selecionada:null ,
        },
    },
    Barreiras:{
       intrinseco:{
            p0:{
                pergunta:'Eu sinto que não tenho energia' ,
                resposta:null ,
            },
            p1:{
                pergunta:'Eu tenho limitações físicas (musculares e/ou articulares)' ,
                resposta:null ,
            },
            p2:{
                pergunta:'A minha doença que me impede de me exercitar' ,
                resposta:null ,
            },
            p3:{
                pergunta:'Eu tenho excesso de peso' ,
                resposta:null ,
            },
            p4:{
                pergunta:'Eu tenho preguiça' ,
                resposta:null ,
            },
            p5:{
                pergunta:'Eu tenho medo de me machucar' ,
                resposta:null ,
            },
            p6:{
                pergunta:'Eu tenho vergonha (aparência física, timidez…)' ,
                resposta:null ,
            },
            p7:{
                pergunta:'Eu tenho medo de sentir falta de ar' ,
                resposta:null ,
            },
            p8:{
                pergunta:'Eu não tenho tempo (trabalho, compromisso…)' ,
                resposta:null ,
            },
            p9:{
                pergunta:'Eu não tenho interesse/não gosto de praticar exercício' ,
                resposta:null ,
            },
            p10:{
                pergunta:'Eu não acredito nos benefícios na atividade física',
                resposta:null ,
            },
            p11:{
                pergunta:'Eu não tenho dinheiro para fazer exercício' ,
                resposta:null ,
            },
       },
       extrinseco:{
        p0:{
            pergunta:'Eu não tenho companhia para ir comigo (amigos/família)' ,
            resposta:null ,
        },
        p1:{
            pergunta:'Eu não tenho incentivo da família e/ou amigos' ,
            resposta:null ,
        },
        p2:{
            pergunta:'Eu não tenho conhecimento e/ou orientação' ,
            resposta:null ,
        },
        p3:{
            pergunta:'Eu não tenho suporte profissional' ,
            resposta:null ,
        },
        p4:{
            pergunta:'Não pratico por causa do clima (calor, vento chuva, frio…)' ,
            resposta:null ,
        },
        p5:{
            pergunta:'Falta de espaço disponível para eu realizar exercício' ,
            resposta:null ,
        },
        p6:{
            pergunta:'Falta de ambiente seguro para eu realizar exercício' ,
            resposta:null ,
        },
        p7:{
            pergunta:'Falta de equipamento disponível para eu realizar exercício' ,
            resposta:null ,
        },
       },
       
    },
}

const opTextoSeamanal = [

                        [`0) Nunca`,
                        `1) Quase nunca `,
                        `2) Poucas vezes `,
                        `3) Várias vezes `,
                        `4) Muitas vezes`,
                        `5) Muitíssimas vezes `,
                        `6) Incapaz de dormir devido a asma`],

                        [` 0) Sem sintomas`,
                        ` 1) Sintomas muito leves`,
                        ` 2) Sintomas leves `,
                        ` 3) Sintomas moderados`,
                        ` 4) Sintomas um tanto graves `,
                        ` 5) Sintomas graves `,
                        ` 6) Sintomas muito graves`],

                        [` 0) Nada limitado `,
                        ` 1) Muito pouco limitado `,
                        ` 2) Pouco limitado `,
                        ` 3) moderadamente limitado`,
                        ` 4) Muito limitado`,
                        ` 5) Extremamente limitado `,
                        ` 6) Totalmente limitado`,],

                        [` 0) Nenhuma `,
                        ` 1) Muito pouca `,
                        ` 2) Alguma`,
                        ` 3) Moderada`,
                        ` 4) Bastante`,
                        ` 5) Muita`,
                        ` 6) Muitíssima `],

                        [` 0) Nunca`,
                        ` 1) Quase nunca`,
                        ` 2) Pouco tempo `,
                        ` 3) Algum tempo `,
                        ` 4) Bastante tempo`,
                        ` 5) Quase sempre`,
                        ` 6) Sempre `, ],

                        [` 0) Nenhum`,
                        ` 1) 1-2 jatos na maior parte dos dias `,
                        ` 2) 3-4 jatos na maior parte dos dias `,
                        ` 3) 5-8 jatos na maior parte dos dias`,
                        ` 4) 9-12 jatos na maior parte dos dias `,
                        ` 5) 13-16 jatos na maior parte dos dias `,
                        ` 6) Mais de 16 jatos por dia `,
                        ],

                        [` 0) > 95% do previsto`,
                        ` 1) 95-90% do previsto `,
                        ` 2) 89-80% do previsto`,
                        ` 3) 79-70% do previsto `,
                        ` 4) 69-60% do previsto`,
                        ` 5) 59-50% do previsto`,
                        ` 6) < 50% do previsto `,],

                    ];

function ItemFormVF(props){
    const [isSelected, setSelection] = useState(false);
    
    props.nomeForm.valor = isSelected;

    return(
        <View style={[styles.itemQuestionario,{ flexDirection:'row'}]}>
            <Image style={{ width:100, height:100,}}source={props.src}></Image>
            
            <View style={{ flexDirection:'column', alignItems:'flex-start', left:'35%',}}>
                
                <Text style ={{fontSize:27, color:'#595959'}}>{props.name}</Text>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View >
                        <RadioButton.Group onValueChange={value => setSelection(value)} value={isSelected} >
                        <View style={{flexDirection:'row'}}>
                                
                            <RadioButton value="Sim" color='#595959'/>
                            <Text style={{top:8}} >Sim</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                                
                            <RadioButton value="Não" color='#595959' />
                            <Text style={{top:8}}>Não</Text>
                        </View>
                        </RadioButton.Group>
                    </View>
            </View>
            
                

                
            </View>
        </View>
    )
}

function ItemFormPeak(props){
    const [valorUm, setValorUm] = useState(0)
    const [valorDois, setValorDois] = useState(0)
    const [valorTres, setValorTres] = useState(0)

    return(
        <View style={[styles.itemQuestionario,{ flexDirection:'row'}]}>
            <Image style={{ width:100, height:100,}}source={props.src}></Image>
            
            <View style={{ flexDirection:'column', alignItems:'space-between',left:'5%',}}>
                
                <Text style ={{fontSize:20, color:'#595959'}}>{props.name}</Text>
                <View style={{ flexDirection:'row', justifyContent:'flex-start', top:'5%',}}>
                    <View style={{flex:1}}>
                        <TextInput onChangeText={ text1 => {
                            setValorUm(text1);
                            props.nomeForm.valorUm = text1;
                        }  } 
                        defaultValue={props.nomeForm.valorUm.toString()} keyboardType='decimal-pad' placeholder='Digite aqui...' style={{justifyContent:'space-around', borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>
                    </View>
                    
                    <View style={{flex:1}}>    
                        <TextInput onChangeText={ text2 => {
                            setValorDois(text2);
                            props.nomeForm.valorDois = text2;
                        }  }
                        defaultValue={props.nomeForm.valorDois.toString()} keyboardType='decimal-pad' placeholder='Digite aqui...' style={{justifyContent:'space-around', borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>
                    </View>
                    <View style={{flex:1}}>    
                        <TextInput onChangeText={ text3 => {
                            setValorTres(text3);
                            props.nomeForm.valorTres = text3;
                        }  }
                        defaultValue={props.nomeForm.valorTres.toString()} keyboardType='decimal-pad' placeholder='Digite aqui...' style={{justifyContent:'space-around', borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>
                    </View>
                </View>
            </View>
        </View>
    )
}

function ItemFormSemanal(props){
    const  [opSelecionada, setOpSelecionada] = useState(false);
    props.pergunta.selecionada = opSelecionada;

    return(
        <View style={[styles.itemQuestionario, {alignItems:'flex-start'}]}>
            <Text style={{textAlign:'center' , color:'black' }}>{props.pergunta.titulo}</Text>
            <View style={{flexDirection:'column'}}>
            <RadioButton.Group onValueChange={ value => setOpSelecionada(value)} value={opSelecionada}>

                <View style={{flexDirection:'row'}}>
                    <RadioButton value={props.opTexto[0]} color='#595959'></RadioButton>
                    <Text style={{top:8}}>{props.opTexto[0]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton value={props.opTexto[1]} color='#595959'></RadioButton>
                    <Text style={{top:8}}>{props.opTexto[1]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton value={props.opTexto[2]} color='#595959'></RadioButton>
                    <Text style={{top:8}}>{props.opTexto[2]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton value={props.opTexto[3]} color='#595959'></RadioButton>
                    <Text style={{top:8}}>{props.opTexto[3]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton value={props.opTexto[4]} color='#595959'></RadioButton>
                    <Text style={{top:8}}>{props.opTexto[4]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton value={props.opTexto[5]} color='#595959'></RadioButton>
                    <Text style={{top:8}}>{props.opTexto[5]}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton value={props.opTexto[6]} color='#595959'></RadioButton>
                    <Text style={{top:8}}>{props.opTexto[6]}</Text>
                </View>

            </RadioButton.Group>
               

                
            </View>
        </View>
    );
}

function ItemFormBarreiras(props){
    const [opSelecionada, setOpSelecionada] = useState(false);
    props.itemBarreiras.resposta = opSelecionada;

    return(
        <View style={[styles.itemQuestionario, {alignItems:'center'}]}>

            <Text style={{textAlign:'center', color:'black'}}>{props.itemBarreiras.pergunta}</Text> 

            <RadioButton.Group onValueChange={ value => setOpSelecionada(value)} value={opSelecionada}>
                <View style={{justifyContent:'center',flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{top:'7%'}}>Nunca</Text>
                    
                    <View style={{flexDirection:'column'}}>
                        <RadioButton value={1} color='#595959'></RadioButton>
                        <Text style={{textAlign:'center'}}>1</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <RadioButton value={2} color='#595959'></RadioButton>
                        <Text style={{textAlign:'center'}}>2</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <RadioButton value={3} color='#595959'></RadioButton>
                        <Text style={{textAlign:'center'}}>3</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <RadioButton value={4} color='#595959'></RadioButton>
                        <Text style={{textAlign:'center'}}>4</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <RadioButton value={5} color='#595959'></RadioButton>
                        <Text style={{textAlign:'center'}}>5</Text>
                    </View>
                    <Text style={{top:'7%'}}>Sempre</Text>
                </View>
                
                </View>
            </RadioButton.Group>
        </View>
    );
}


function formularioSintomas(){
    let srcs = [tosse, chiado, faltadear, acordar, bombinha, peak_flow];
    let names = ['Tosse', 'Chiado', 'Falta de Ar', 'Acordar ', 'Bombinha', 'Peak Flow (opcional)'];
    let tituloQuestionario = ['Titulo1', 'Titulo2'];

    return(
        
            <View style={{flex:1,}}>
                
                <Text style = {[styles.tituloQuestionario, { top:20,}]}>Questionário de controle de ASMA - ACQ (Diário) </Text>
                <Text style = {[{fontSize:15, textAlign:'center', top:20,}, (fezDiario ? {color:'green'} : {color:'red'}) ]}> Você {fezDiario ? "já fez " : 'ainda não fez'} seu questionário diário hoje!</Text>
                <Text style = {{ fontSize:20, top:30, textAlign:'center'}}>Marque caso tenha tido algum destes sintomas hoje!</Text>
                <View style={{top:40,}}>
                    <ItemFormVF name={names[0]} src={srcs[0]} nomeForm={objEnvio.ACQ.Tosse} ></ItemFormVF>
                    <ItemFormVF name={names[1]} src={srcs[1]} nomeForm={objEnvio.ACQ.Chiado}></ItemFormVF>
                    <ItemFormVF name={names[2]} src={srcs[2]} nomeForm={objEnvio.ACQ.FaltaDeAr}></ItemFormVF>
                    <ItemFormVF name={names[3]} src={srcs[3]} nomeForm={objEnvio.ACQ.Acordar}></ItemFormVF>
                    <ItemFormVF name={names[4]} src={srcs[4]} nomeForm={objEnvio.ACQ.Bombinha}></ItemFormVF>
                    <ItemFormPeak name={names[5]} src={srcs[5]} nomeForm={objEnvio.ACQ.Peakflow} ></ItemFormPeak>
                </View>

                <View style={[styles.bt, {backgroundColor:'#595959' ,top:40, margin:20,left:70,borderColor:"#ffffff"}]}>
                    <TouchableOpacity onPress={() =>{
                        objEnvio.formularioEnviado='ACQ';
                        fetch('https://webhook.site/16471574-a33c-4a96-8f4a-083a4409bb30', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(objEnvio),
                          })
                          .then(response => response.text())
                          .then(data => {
                            console.log('Success:', data);
                          })
                          .catch((error) => {
                            console.error('Error:', error);
                          });
                        }
                    } title='Enviar'><Text style={{color:'white', textAlign:'center', fontSize:26}}>Enviar</Text></TouchableOpacity>
                </View>
                
                <Text style = {[styles.tituloQuestionario, { top:30,}]}>Escala de sintomas (Semanal)</Text>
                <Text style = {[{fontSize:15, textAlign:'center', top:30,}, (fezSemanal ? {color:'green'} : {color:'red'}) ]}> Você {fezSemanal ? "já fez " : 'ainda não fez'} seu questionário semanal!</Text>
                <Text style = {{ fontSize:20, top:30, textAlign:'center'}}>Escolha apenas uma das opções.</Text>
                

                <View style={{top:40,}}>
                    
                    <ItemFormSemanal pergunta={objEnvio.EscalaSintomas.pergunta0} opTexto={opTextoSeamanal[0]}></ItemFormSemanal>
                    <ItemFormSemanal pergunta={objEnvio.EscalaSintomas.pergunta1} opTexto={opTextoSeamanal[1]}></ItemFormSemanal>
                    <ItemFormSemanal pergunta={objEnvio.EscalaSintomas.pergunta2} opTexto={opTextoSeamanal[2]}></ItemFormSemanal>
                    <ItemFormSemanal pergunta={objEnvio.EscalaSintomas.pergunta3} opTexto={opTextoSeamanal[3]}></ItemFormSemanal>
                    <ItemFormSemanal pergunta={objEnvio.EscalaSintomas.pergunta4} opTexto={opTextoSeamanal[4]}></ItemFormSemanal>
                    <ItemFormSemanal pergunta={objEnvio.EscalaSintomas.pergunta5} opTexto={opTextoSeamanal[5]}></ItemFormSemanal>
                    <ItemFormSemanal pergunta={objEnvio.EscalaSintomas.pergunta6} opTexto={opTextoSeamanal[6]}></ItemFormSemanal>
                    

                    </View>
                
                <View style={[styles.bt, {backgroundColor:'#595959' ,top:40, margin:20,left:70,}]}>
                    <TouchableOpacity onPress={() =>{
                        objEnvio.formularioEnviado='EscalaSintomas';
                        fetch('https://webhook.site/16471574-a33c-4a96-8f4a-083a4409bb30', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(objEnvio),
                          })
                          .then(response => response.text())
                          .then(data => {
                            console.log('Success:', data);
                          })
                          .catch((error) => {
                            console.error('Error:', error);
                          });
                        }
                    }
                     title='Enviar'><Text style={{color:'white', textAlign:'center', fontSize:26}}>Enviar</Text></TouchableOpacity>
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
                <View>
                    <Text style={[styles.tituloQuestionario, {marginTop:"6%",textAlign:'center'}]}>Fatores pessoais{'\n'} (intrínseco)</Text>

                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p0}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p1}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p2}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p3}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p4}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p5}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p6}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p7}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p8}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p9}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p10}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.intrinseco.p11}></ItemFormBarreiras>
                
                </View>

                <View>
                    <Text style={styles.tituloQuestionario}>Fatores ambientais (extrínseco)</Text>

                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.extrinseco.p0}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.extrinseco.p1}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.extrinseco.p2}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.extrinseco.p3}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.extrinseco.p4}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.extrinseco.p5}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.extrinseco.p6}></ItemFormBarreiras>
                    <ItemFormBarreiras itemBarreiras={objEnvio.Barreiras.extrinseco.p7}></ItemFormBarreiras>
                </View>
    
                

                <View style={[styles.bt, {top:0, margin:20,left:70,}]}>
                    <TouchableOpacity onPress={() =>{
                        objEnvio.formularioEnviado='Barreiras';
                        fetch('https://webhook.site/16471574-a33c-4a96-8f4a-083a4409bb30', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(objEnvio),
                          })
                          .then(response => response.text())
                          .then(data => {
                            console.log('Success:', data);
                          })
                          .catch((error) => {
                            console.error('Error:', error);
                          });
                        }
                    } 
                    
                    title='Enviar'><Text style={{color:'white', textAlign:'center', fontSize:26}}>Enviar</Text></TouchableOpacity>
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
                <View style={{ marginHorizontal:2,height:72, justifyContent:'space-between', flexDirection:'row'}} >
                
                    <TouchableOpacity style={[styles.bt, {backgroundColor:"#99ff33", top:10,left:'10%',textAlign:'center', }]} onPress={()=>setSintomas(true) }>
                        <View style={{flex:1, justifyContent:'space-around',}}>    
                            <Text style={[styles.textbt, {textAlign:'center',}]}>Questionário de controle de Asma</Text>
                        </View>
                    </TouchableOpacity>
                
                    
                    <TouchableOpacity style={[styles.bt, {backgroundColor:"#99ff33",top:10,right:'10%',textAlign:'center',}]} onPress={()=>setSintomas(false) }>
                        <View style={{flex:1, justifyContent:'space-around'}}>
                            <Text style={[styles.textbt, { justifyContent:'center',}]}>Barreiras</Text>
                        </View>
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
        backgroundColor:'#595959',
        borderWidth:1,
        borderColor:'#595959', 
        borderRadius:10,
        width:'47%',
        padding:5,
        },
    textbt:{
        textAlign:'center',
        color:'black',
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
    inputEscrito:{
        borderRadius:5,
        borderWidth:1,
        height:40,
        backgroundColor:'#ffffff',
    }
   
});