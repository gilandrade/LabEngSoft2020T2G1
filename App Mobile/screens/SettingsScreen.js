import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { AuthContext } from './modulos_extra/context';

const SettingsScreen = () => {

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <View style={[styles.bt, {backgroundColor:'#595959', marginTop: 10,}]}>
        <TouchableOpacity onPress={() => {signOut()}} title='Sair'><Text style={{color:'white', paddingTop: 3, textAlign:'center', fontSize:26}}>Sair</Text></TouchableOpacity>
      </View>

    </View>
  );
}

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