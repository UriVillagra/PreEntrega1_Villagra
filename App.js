import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList, Modal } from 'react-native';
import Reacts, { useState } from 'react';

export default function App() {

  const [textValue, setTextValue] = useState('')
  const [itemslist, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState ({})
  const [modalVisible, setModalVisible] = useState (false)

  const onHandlechangeItem = text => setTextValue(text)

  const addItem = () => {
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue}, 
    ])
  }

  const renderListItem = ({item}) => (
    <View style={styles.TextContainer}>
      <Text style={styles.Text}>{item.value}</Text>
    </View>
  )

  const onHandleDelete = () => {}
  const onHandleModal = () => {}

  return (
    <View style={styles.container}>
      <View style={styles.InputComtainer}>
        <TextInput 
            placeholder='Item de la Lista'
            style={styles.Input}
            value={textValue}
            onChangeText={onHandlechangeItem}
        />
        <Button title='ADD' onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          data={itemslist}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal 
      visible={modalVisible} animationType='fade'>
        <View style={styles.modalTitle}>
          <Text>Mi Modal</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>Estas Seguro de Eliminar??</Text>
        </View>
        <View style={styles.modalButton}>
          <Button title='Configurar' onPress={onHandleDelete}/>
        </View>
      </Modal>
      {/* <View style={styles.listContainer}>
        {itemslist.map(item => (
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>{item.value}</Text>
          </View>
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '759cff',
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
  modalTitle:{
    backgroundColor: "#ccc",
    color: "#fff",
    fontSize: 18,
  },
  modalMessage:{
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton:{
    marginTop: 15,
  }
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