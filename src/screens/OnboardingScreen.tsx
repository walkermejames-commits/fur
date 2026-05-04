import React from 'react'; import { View, Text, StyleSheet } from 'react-native'; import { Button } from '../components/Button';
export const OnboardingScreen = ({ navigation }: any) => <View style={s.c}><Text style={s.h}>Find UR Community</Text><Text>Meet people who share your interests.</Text><Button title='Get Started' onPress={()=>navigation.navigate('Auth')} /></View>;
const s=StyleSheet.create({c:{flex:1,justifyContent:'center',padding:24,gap:14,backgroundColor:'#F9F9F9'},h:{fontSize:34,fontWeight:'800'}});
