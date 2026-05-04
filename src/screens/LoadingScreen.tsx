import React, { useEffect } from 'react'; import { View, Text, StyleSheet } from 'react-native'; import { FistBumpLoader } from '../components/FistBumpLoader';
export const LoadingScreen = ({ navigation }: any) => { useEffect(()=>{const t=setTimeout(()=>navigation.replace('ProfileSetup'),1300);return ()=>clearTimeout(t)},[navigation]); return <View style={s.c}><FistBumpLoader/><Text>Finding your community…</Text></View>; };
const s=StyleSheet.create({c:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#F9F9F9',gap:16}});
