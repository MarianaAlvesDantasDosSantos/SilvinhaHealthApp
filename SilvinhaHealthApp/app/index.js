import React from 'react'
import {  FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Color, Icon, router } from 'expo-router';

const menuData =[
    {
        id: '1',
        title: 'Calculadora de IMC',
        router: '/imc',
        Color:'#FF6B6B',
        Icon: '📊'
    },
    {
        id: '2',
        title: 'Peso Ideal',
        router: '/peso ideal',
        Color:'#4ECDC4',
        Icon: '⚖️'
    },
    {
        id: '3',
        title: 'Água Diária',
        router: '/agua',
        Color:'#45B7D1',
        Icon: '💧'
    },
    {
        id: '4',
        title: 'Taxa Meatabólica',
        router: '/tmb',
        Color:'#96cEB4',
        Icon: '🔥'
    },
]

export default function HomeScreen() {
  const renderMenuItem = ({item}) => {
    <TouchableOpacity
    style={[styles.button,{backgroundColor: item.color }]}
    onPress={() => router.push(item.route)}
    activeOpacity={0.8}
    >
        <Text style={styles.buttonIcon}>{item.Icon}</Text>
        <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  }
  
    return (
    <View>
      <Text>Oi mundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({})