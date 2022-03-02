import React from 'react';

import {Text, View, Button, TextInput} from 'react-native';

import {styles} from './styles';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Type here"
          placeholderTextColor={'#841584'}
          autoCorrect={false}
          autoFocus={true}
          style={styles.textInput}
        />

        <Button title="Add" color="#841584" onPress={() => null} />
      </View>

      <View>
        <Text style={styles.textH1}> Más populares</Text>
      </View>
    </>
  );
};

export default App;
