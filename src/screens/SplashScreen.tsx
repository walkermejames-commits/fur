import React from 'react'; import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
export const SplashScreen = () => <View style={s.c}><Text style={s.k}>James Ventures / DUCK Core</Text><Text style={s.logo}>FUR</Text><Text style={s.t}>Find what connects you.</Text></View>;
const s=StyleSheet.create({c:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:colors.backgroundPrimary,padding:24},k:{color:colors.gold,fontSize:12,fontWeight:'800',letterSpacing:1,textTransform:'uppercase',marginBottom:12},logo:{fontSize:56,fontWeight:'800',color:colors.cream},t:{color:colors.textMuted,fontWeight:'600'}});
