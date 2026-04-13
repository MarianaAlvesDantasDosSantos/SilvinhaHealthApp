import { useState } from "react";
import { TouchableOpacity } from "react-native";

const [sexo, set Sexo] = useState(null);

<TouchableOpacity
 style={[
    styles.sexButoon,
    sexo === 'masculino' && style.sexButtonSelected,
 ]}
 onPress={() => setSexo ('masculino')}
 >
    <Text style={styles.sexIcon}>👨</Text>
    <Text styles={[
        styles.sexText,
        sexo === 'masculino' && styles.sexTextSelected
    ]}>
        Masculino
    </Text>
 </TouchableOpacity>

 import React, {useState} from "react";
 import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    styleSheet,
    Alert,
    ScrollView,
 } from 'react-native';
 import {SafeAreaView } from "react-native-safe-area-context";
 import {calcularPesoIdeal} from '../utils/calculos';
 import BotaoVoltar from "../components/BotaoVoltar";

 export default function PesoIdealScreen () {
    const [altura, setAltura] = useState ('');
    const [sexo, setSexo] = useState('');

    const handleCalcular = () => {
        if (!altura || !sexo) {
            Alert.alert ('Erro', 'Preencha a altura e selecione o sexo!');
            return;
        }

        const alturaNum = parseFloat(altura.replace(',', '.'));
        if (isNaN(alturaNum) || alturaNum <= 0) {
            Alert.alert('Erro', 'Digite uma altura válida.');
            return;
        }

        const pesoIdeal = calcularPesoIdeal(alturaNum, sexo);
        setResultado(pesoIdeal);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <Text style={styles.content}>
                        <Text style={styles.description}>
                            Calcule seu peso ideal baseado na sua altura e sexo usando
                            a fórmula de Devine.
                        </Text>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Altura (m)</Text>
                            <TextInput
                            style={styles.input}
                            placeholder="Ex: 1.70"
                            value={altura}
                            onChangeText={setAltura}
                            keyboardType="numeric"
                            placeholderTextColor="#999"
                            />
                        </View>
                        <Text style={styles.label}>Sexo</Text>
                        <View style={styles.sexContainer}>
                            <TouchableOpacity
                            style={[
                                styles.sexButoon,
                                sexo === 'masculino' && styles.sexButoonSelected,
                            ]}
                            onPress{() => setSexo('masculino')}
                            >
                                <Text style={styles.sexIcon}>👨</Text>
                                <Text style={[
                                    styles.sexText,
                                    sexo === 'masculino' && styles.sexTextSelected
                                ]}>
                                    Masculino
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            style={[
                                styles.sexButoon,
                                sexo === 'feminino' && styles.sexButoonSelected,
                            ]}
                            onPress={() => setSexo ('feminino')}
                            ></TouchableOpacity>
                        </View>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
 }