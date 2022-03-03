import React, {useState} from 'react';

import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {styles} from './styles';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOnChangeInput = value => {
    setText(value);
  };

  const addItem = () => {
    if (text !== '') {
      setTextList([...textList, {id: textList.length + 1, value: text}]);
      setText('');
    }
  };

  const handleDeleteItem = id => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  };

  const onHandleModal = id => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Type here"
          placeholderTextColor={'#841584'}
          autoCorrect={false}
          autoFocus={true}
          style={styles.textInput}
          value={text}
          onChangeText={handleOnChangeInput}
        />

        <Button title="Add" color="#841584" onPress={() => addItem()} />
      </View>

      <View>
        <Text style={styles.textH1}> Más populares</Text>
      </View>

      <View style={styles.containerList}>
        <FlatList
          data={textList}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onHandleModal(item.id)}>
              <Text style={styles.textList}>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainerContent}>
          <View style={styles.modaTitle}>
            <Text>Description</Text>
          </View>
          <View style={styles.modalContent}>
            <Text>Do you want to delete this item?</Text>
            <Text style={styles}>{selectedItem.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button
              title="Yes"
              color="#841584"
              onPress={() => handleDeleteItem(selectedItem.id)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

/*

{textList.length > 0 &&
          textList.map(item => (
            <Text key={item.id} style={styles.textList}>
              {item.value}
            </Text>
          ))}
*/
