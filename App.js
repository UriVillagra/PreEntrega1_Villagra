import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList, Modal, TouchableOpacity,} from 'react-native';
import Reacts, { useState } from 'react';

export default function App() {

  const [textValue, setTextValue] = useState('')
  const [itemslist, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState ()
  const [modalVisible, setModalVisible] = useState (false)

  const onHandlechangeItem = text => setTextValue(text)

  const addItem = () => {
    if (textValue === '') {
      return
    }
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue}, 
    ])
  }

  const renderListItem = ({item, index}) => (
    <TouchableOpacity style={styles.TextContainer} onPress={() => onHandleModal(index) }>
      <Text style={styles.Text}>{item.value}</Text>
    </TouchableOpacity>
  )

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemslist
    arr.splice(itemSelected, 1)
    setItemsList(arr)
    setModalVisible(false)
  }

  const onHandleModal = index => {
    console.log (index)
    setModalVisible (true)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer} >
        <Text style={styles.titulo}>Shop List</Text>
      </View>
      <View style={styles.InputComtainer}>
        <TextInput 
            placeholder='Item de la Lista'
            style={styles.Input}
            value={textValue}
            onChangeText={onHandlechangeItem}
        />
        <Button title='+ ADD' color={"#000"} onPress={addItem} />
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
          <Button title='Confirmarr' onPress={onHandleDelete}/>
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
    backgroundColor: 'brown',
    padding: 30,
    height: '100%',
  },
  Input: {
    width: 200,
    fontSize: 24,
  },
  InputComtainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 6,
  },
  listContainer:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
    padding: 20,
    width: "100%",
    
  
  },
  Text:{
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    width: "100%",
  },
  TextContainer:{
    borderRadius: 12,
    marginVertical: 10,
    padding: 20,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  modalTitle:{
    backgroundColor: "#ccc",
    color: "#fff",
    fontSize: 28,
  },
  modalMessage:{
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
  },
  modalButton:{
    marginTop: 15,
    
  },
  titulo:{
    fontSize: 36,
  },
  tituloContainer:{
    alignItems: "center",
    width: "100%",
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