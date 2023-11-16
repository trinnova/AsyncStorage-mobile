import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {


  return (
    <>
      <View style={styles.contenedor}>
        <TextInput />

        <Button
          title='Guardar'
          color='#333'
        />

        <TouchableHighlight>
          <Text>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {

  },

});

export default App;
