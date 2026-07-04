import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const Button = ({ title, onPress, variant = 'primary' }: { title: string; onPress: () => void; variant?: 'primary' | 'secondary' }) => (
  <Pressable style={[styles.btn, variant === 'secondary' && styles.secondary]} onPress={onPress}><Text style={styles.text}>{title}</Text></Pressable>
);
const styles = StyleSheet.create({ btn: { backgroundColor: colors.velvet, padding: 14, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: colors.bronze }, secondary: { backgroundColor: colors.backgroundPanelSoft, borderColor: colors.gold }, text: { color: colors.cream, fontWeight: '700' } });
