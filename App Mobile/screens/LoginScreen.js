import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { AuthContext } from './modulos_extra/context';

const submitForm = () => {let a = 2;}

const SettingsScreen = () => {
    const { signIn } = React.useContext(AuthContext);
    const [username, setUsername] = useState(0)
    const [senha, setSenha] = useState(0)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <TextInput 
          onChangeText= { text1 => {
            setUsername(text1);
          }  } 
          keyboardType='email-address' placeholder='Digite o seu email' style={{marginTop: 10, padding: 10, borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>
          
          <TextInput 
          onChangeText= { text2 => {
            setSenha(text2);
          }  } 
          secureTextEntry={true} placeholder='Digite a sua senha' style={{marginTop: 10, padding: 10, borderWidth:1, width:'90%',height:40, borderColor:'#595959', backgroundColor:'#ffffff' }}></TextInput>

          <View style={[styles.bt, {backgroundColor:'#595959', marginTop: 10,}]}>
            <TouchableOpacity onPress={() => {signIn(username, senha)}} title='Entrar'><Text style={{color:'white', paddingTop: 3, textAlign:'center', fontSize:26}}>Entrar</Text></TouchableOpacity>
          </View>

        </View>
    );
};

export default SettingsScreen;

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
});