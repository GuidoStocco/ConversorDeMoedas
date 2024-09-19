import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
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

        <View style={styles.areaValor}>
          <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>

          <TextInput 
            placeholder='Ex: 1.5'
            style={styles.input}
            keyboardType='numeric'
          />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>
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
    borderTopRightRadius: 8,
    marginBottom: 1
  },
  titulo:{
    fontSize: 16,
    paddingLeft: 5,
    paddingTop: 5,
    color: '#000',
    fontWeight: '500'
  },
  areaValor:{
    backgroundColor: '#f9f9f9',
    width: '90%',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 5
  },
  input:{
    width: '100%',
    color: '#000',
    fontSize: 18,
    padding: 8
  },
  btn:{
    backgroundColor:'#fb4b57',
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  btnText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
