import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 40
  },
  areaMoeda:{
    backgroundColor: '#fff',
    width: '90%',
    padding: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  titulo:{
    fontSize: 16,
    fontWeight: 500,
    paddingLeft: 5
  }
});
