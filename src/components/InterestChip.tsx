import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const InterestChip = ({ label, selected, onPress }: { label: string; selected?: boolean; onPress?: () => void }) => (
  <Pressable onPress={onPress} style={[styles.chip, selected && styles.selected]}><Text style={styles.t}>{label}</Text></Pressable>
);
const styles = StyleSheet.create({ chip: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: colors.backgroundPanelSoft, borderWidth: 1, borderColor: colors.bronze, margin: 4 }, selected: { backgroundColor: colors.velvet, borderColor: colors.gold }, t: { color: colors.cream, fontWeight: '700' } });
