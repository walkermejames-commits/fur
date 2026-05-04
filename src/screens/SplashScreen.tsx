import React from 'react'; import { View, Text, StyleSheet } from 'react-native';
export const SplashScreen = () => <View style={s.c}><Text style={s.logo}>FUR</Text><Text style={s.t}>Find what connects you.</Text></View>;
const s=StyleSheet.create({c:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#FF8C42'},logo:{fontSize:56,fontWeight:'800',color:'white'},t:{color:'white'}});
