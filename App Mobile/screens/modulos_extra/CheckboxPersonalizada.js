import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity, CheckBox, View, Text} from 'react-native';

function CheckBoxPersonalizada(props){
    
    return(
        <TouchableOpacity style={[styles.checkboxBase, (props.estado ? styles.checkboxOn : styles.checkboxOff)]} onPress={props.funcPress}> 
                   
        </TouchableOpacity>
    );
}

export const CheckBoxDois = (props) => {
    const [chk, setChk ] = useState(false);
    const FPress = () => { setChk(!chk)}
    return(
        <View>
            <View style={{flexDirection:'row'}}>
                <CheckBoxPersonalizada estado={chk}  funcPress={FPress}></CheckBoxPersonalizada>
                <Text>  {props.title1}</Text>
            </View>
            <View style={{flexDirection:'row', top:10,}}>
                <CheckBoxPersonalizada estado={!chk}  funcPress={FPress}></CheckBoxPersonalizada>
                <Text>  {props.title2}</Text>
            </View>
        </View>
    );
}

export const CheckBoxZeroSeis = (props) =>{

    const [chk0, setChk0 ] = useState(false);
    const FPress0 = () => { setChk0(!chk0)}
    const [chk1, setChk1 ] = useState(false);
    const FPress1 = () => { setChk1(!chk1)}
    const [chk2, setChk2 ] = useState(false);
    const FPress2 = () => { setChk2(!chk2)}
    const [chk3, setChk3 ] = useState(false);
    const FPress3 = () => { setChk3(!chk3)}
    const [chk4, setChk4 ] = useState(false);
    const FPress4 = () => { setChk4(!chk4)}
    const [chk5, setChk5 ] = useState(false);
    const FPress5 = () => { setChk5(!chk5)}
    const [chk6, setChk6 ] = useState(false);
    const FPress6 = () => { setChk6(!chk6)}

    return(
        <View style={{flexDirection:'column', justifyContent:'space-around', height:220,}}>
            <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                <CheckBoxPersonalizada estado={chk0} funcPress={FPress0}></CheckBoxPersonalizada>
                <Text>{props.title0}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <CheckBoxPersonalizada estado={chk1} funcPress={FPress1}></CheckBoxPersonalizada>
                <Text>{props.title1}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <CheckBoxPersonalizada estado={chk2} funcPress={FPress2}></CheckBoxPersonalizada>
                <Text>{props.title2}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <CheckBoxPersonalizada estado={chk3} funcPress={FPress3}></CheckBoxPersonalizada>
                <Text>{props.title3}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <CheckBoxPersonalizada estado={chk4} funcPress={FPress4}></CheckBoxPersonalizada>
                <Text>{props.title4}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <CheckBoxPersonalizada estado={chk5} funcPress={FPress5}></CheckBoxPersonalizada>
                <Text>{props.title5}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <CheckBoxPersonalizada estado={chk6} funcPress={FPress6}></CheckBoxPersonalizada>
                <Text>{props.title6}</Text>
            </View>
        </View>
    );
}

export const CheckBoxCinco = (props) =>{

    const [chk0, setChk0 ] = useState(false);
    const FPress0 = () => { setChk0(!chk0)}
    const [chk1, setChk1 ] = useState(false);
    const FPress1 = () => { setChk1(!chk1)}
    const [chk2, setChk2 ] = useState(false);
    const FPress2 = () => { setChk2(!chk2)}
    const [chk3, setChk3 ] = useState(false);
    const FPress3 = () => { setChk3(!chk3)}
    const [chk4, setChk4 ] = useState(false);
    const FPress4 = () => { setChk4(!chk4)}

    return(
        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-around'}}>
            <View style={{flexDirection:'column'}}>
                <Text>0</Text>
                <CheckBoxPersonalizada estado={chk0} funcPress={FPress0}></CheckBoxPersonalizada>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text>1</Text>
                <CheckBoxPersonalizada estado={chk1} funcPress={FPress1}></CheckBoxPersonalizada>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text>2</Text>
                <CheckBoxPersonalizada estado={chk2} funcPress={FPress2}></CheckBoxPersonalizada>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text>3</Text>
                <CheckBoxPersonalizada estado={chk3} funcPress={FPress3}></CheckBoxPersonalizada>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text>4</Text>
                <CheckBoxPersonalizada estado={chk4} funcPress={FPress4}></CheckBoxPersonalizada>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    checkboxBase:{
        width:20,
        height:20,
        borderRadius:3,
        borderWidth:1,
        backgroundColor:'#ffffff',
    },
    checkboxOn:{
        backgroundColor:'black',
    },
    checkboxOff:{
        backgroundColor:'#ffffff',
    },
})