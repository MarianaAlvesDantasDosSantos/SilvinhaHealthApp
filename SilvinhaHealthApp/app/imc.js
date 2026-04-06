const { useState } = require("react");

const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [resultado, setResultado] = useState (null);

const handleCalcular = () => {
    if(!peso || !altura) {
        Alert.alert('Erro', 'Preencha todos os campos!');
        return;
    }
    
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace (',','.'));

    if (isNaN(pesoNum) || isNaN (alturaNum) || pesoNum <= 0 || alturaNum
<= 0) {
    Alert.alert('Erro', 'Digite valores válidos (maiores que zero).');
    return;
}

const resultadoIMC = calcularIMC (pesoNum, alturaNum);
setResultado(resultadoIMC);
};

import React, { useState } from "react";
import {
    View, Text, TextImput, TouchableOpacity,
    styleSheet, Alert, ScrollView,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calcularIMC } from '../components/BotaoVoltar';
import BotaoVoltar from '../components/BotaoVoltar';

export default function ImcScreen() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleCalcular = () => {
        if(!peso || !altura) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }
        const pesoNum = parseFloat(peso.replace(',','.'));
        const alturaNum = parseFloat(altura.replace(',','.'));
        if (isNaN(pesoNum) || isNaN(altura) || pesoNum <= 0 || alturaNum
        <= 0) {
              Alert.alert('Erro', 'Digite valores válidos (maiores que zero.)');
              return;
        }
        const resultadoIMC = calcularIMC(pesoNum, alturaNum);
        setResultado(resultadoIMC);
    };

    return (
        <SafeAreaView style={styleSheet.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <Text style={styles.title}>Calculadora de IMC</Text>
                    <Text style={styles.description}>
                        O Índice de Massa Corporal (IMC) é uma medida
                        internacional usada para calcular se uma pessoa
                        está no peso ideal.
                    </Text>
                    <View style={styles.impuyGroup}>
                      <Text style={styles.label}>Peso (Kg)</Text>
                      <TextImput
                      style={style.imput}
                      placeholder="Ex: 70"
                      value={peso}
                      onChangeText={setPeso}
                      keyboardtype="numeric"
                      placeholderTextColor="#999"
                      />
                    </View>
                    <View style={styles.impuyGroup}>
                        <Text style={styles.label}>Altura (m)</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Ex: 1.75"
                        value={altura}
                        onChangeText={setAltura}
                        keyboardType="numeric"
                        placeholderTextColor="#999"
                        />
                    </View>
                    <TouchableOpacity styele={style.button} 
                onPress={handleCalcular}>
                            <Text style={styles.buttonText}>Calcular IMC</Text>
                    </TouchableOpacity>
                    {resultado && (
                        <View style={styles.resultBox}>
                            <Text style={styles.resulTitle}>Resultado:</Text>
                            <Text style={styles.resultValue}>{resultado.valor}</Text>
                            <Text style={styles.resultClassification}>
                                {resultado.classificacao}
                            </Text>
                </View>
                )}
                <BotaoVoltar />
                <View/>
            </ScrollView>
        </SafeAreaView>
    );
}