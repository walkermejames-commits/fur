import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const Button = ({ title, onPress, variant = 'primary' }: { title: string; onPress: () => void; variant?: 'primary' | 'secondary' }) => (
  <Pressable style={[styles.btn, variant === 'secondary' && styles.secondary]} onPress={onPress}><Text style={styles.text}>{title}</Text></Pressable>
);
const styles = StyleSheet.create({ btn: { backgroundColor: colors.orange, padding: 14, borderRadius: 999, alignItems: 'center' }, secondary: { backgroundColor: colors.teal }, text: { color: 'white', fontWeight: '700' } });
