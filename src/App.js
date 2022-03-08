import React, {useState} from 'react';

import {View, Button, Text, FlatList, TouchableOpacity} from 'react-native';

import Input from './components/atoms/Input/index';
import CustomModal from './components/molecules/CustomModal';
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

      <CustomModal
        visible={modalVisible}
        title="Delete Item"
        description="Are you sure you want to delete this item?"
        selectedItem={selectedItem}
        buttonText="Yes"
        onHandleDeleteItem={handleDeleteItem}
      />
    </View>
  );
};

export default App;
