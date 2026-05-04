import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

export const FistBumpLoader = () => {
  const x = useRef(new Animated.Value(0)).current;
  useEffect(() => { Animated.loop(Animated.sequence([Animated.timing(x,{toValue:1,duration:700,useNativeDriver:true}),Animated.timing(x,{toValue:0,duration:700,useNativeDriver:true})])).start(); }, [x]);
  return <View><View style={s.row}><Animated.Text style={{ transform: [{ translateX: x.interpolate({ inputRange:[0,1], outputRange:[-20,0] }) }] }}>👊</Animated.Text><Animated.Text style={{ transform: [{ translateX: x.interpolate({ inputRange:[0,1], outputRange:[20,0] }) }] }}>👊</Animated.Text></View><Text style={s.u}>U</Text></View>;
};
const s = StyleSheet.create({ row: { flexDirection: 'row', justifyContent: 'center', gap: 20 }, u: { textAlign: 'center', marginTop: 8, color: '#2DC5B0', fontSize: 28 } });
