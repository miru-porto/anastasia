import React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {styles} from './styles';

const flatList = () => {
    return(
        <FlatList
          data={textList}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onHandleModal(item.id)}>
              <Text style={styles.textList}>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
    )
}

export default flatList();