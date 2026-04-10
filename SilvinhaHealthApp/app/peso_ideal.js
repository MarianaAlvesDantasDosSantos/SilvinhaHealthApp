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
    }
 }