import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default App = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>

        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
      <Text>Is CheckBox selected: {isSelected2 ? "👍" : "👎"}</Text>
      <Text>isSelected: {isSelected ? "sim" : "não"}</Text>
      <View>
        <TouchableOpacity onPress={() => {
          const data = {
            caixa1: isSelected,
            caixa2: isSelected2
          };

          fetch('https://webhook.site/8f6de5b0-3ed5-49fe-b82c-8b5f71e5ea70', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.text())
            .then(data => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }}>
          <Text>Botão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
