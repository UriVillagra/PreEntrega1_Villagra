import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Reacts, { useState } from 'react';

export default function App() {

  const [textValue, setTextValue] = useState('')

  const [itemslist, setitemslist] = useState([])

  const onHandlechangeItem = (text) => setTextValue()

  return (
    <View style={styles.container}>
      <View style={styles.InputComtainer}>
        <TextInput 
            placeholder='Item de la Lista'
            style={styles.Input}
        />
        <Button title='ADD' />
      </View>
      <View style={styles.listContainer}>
        {itemslist.map(item => (
          <View style={styles.TextContainer}>
            <Text style={styles.Text}> item 1 </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
  },
  Input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
    fontSize: 24,
  },
  InputComtainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer:{
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    marginTop: 20,
    padding: 20,
    backgroundColor: "blue",
  },
  Text:{
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  TextContainer:{
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    width: "100%",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
});




{/* <View style={styles.TextContainer}>
          <Text style={styles.Text}>
            item 1
          </Text>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>
            item 2
          </Text>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>
            item 3
          </Text>
        </View> */}