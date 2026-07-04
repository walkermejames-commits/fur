import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const FistBumpLoader = () => {
  const opacity = useRef(new Animated.Value(0.45)).current;
  useEffect(() => { Animated.loop(Animated.sequence([Animated.timing(opacity,{toValue:1,duration:850,useNativeDriver:true}),Animated.timing(opacity,{toValue:0.45,duration:850,useNativeDriver:true})])).start(); }, [opacity]);
  return <View style={s.wrap}><Animated.View style={[s.mark,{opacity}]}><Text style={s.markText}>D</Text></Animated.View><Text style={s.u}>Preparing workspace...</Text></View>;
};
const s = StyleSheet.create({ wrap: { alignItems: 'center', gap: 10 }, mark: { width: 44, height: 44, borderRadius: 22, borderWidth: 1, borderColor: colors.gold, backgroundColor: colors.velvet, alignItems: 'center', justifyContent: 'center' }, markText: { color: colors.gold, fontWeight: '900', fontSize: 22, letterSpacing: 1 }, u: { textAlign: 'center', color: colors.textMuted, fontSize: 16, fontWeight: '700' } });
