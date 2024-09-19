import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import {PickerItem} from './src/Picker'
import {api} from './src/services/api'


export default function App() {
  const [loading, setLoading] = useState(true)
  const [moedas, setMoedas] = useState([])
  const [moedaSelecionada, setMoedaSelecionada] = useState(null)

  useEffect(() => {
    async function loadMoedas(){
      const response = await api.get("all")
      let arrayMoedas = []

      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          value: key,
          label: key
        })
      })

      setMoedas(arrayMoedas);
      setMoedaSelecionada(arrayMoedas[0].key)
      setLoading(false);
    }

    loadMoedas();
  }, [])

  if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101215'}}>
        <ActivityIndicator color='#fff' size={35}/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione</Text>
          <PickerItem
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={(moeda) => setMoedaSelecionada(moeda)}
          />
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
    paddingLeft: 5,
    paddingTop: 5,
    color: '#000',
    fontWeight: '500'
  }
});
