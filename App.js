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
    marginTop: 70
  },
  areaMoeda:{

  },
  titulo:{
    
  }
});
