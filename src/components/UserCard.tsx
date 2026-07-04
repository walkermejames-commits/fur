import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InterestChip } from './InterestChip';
import { colors } from '../theme/colors';

export const UserCard = ({ user, shared }: any) => <View style={s.card}><View style={s.photo} /><Text style={s.h}>{user.displayName}, {user.age}</Text><Text style={s.p}>{user.bio}</Text><Text style={s.p}>Shared: {shared.join(', ') || 'Say hi and discover.'}</Text><View style={s.row}>{user.interests.map((i: string) => <InterestChip key={i} label={i} />)}</View></View>;
const s = StyleSheet.create({ card: { backgroundColor: colors.backgroundPanel, borderRadius: 8, borderWidth: 1, borderColor: colors.bronze, padding: 16, shadowOpacity: .16, shadowRadius: 10, elevation: 4 }, photo: { height: 180, backgroundColor: colors.backgroundPanelSoft, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: colors.bronze }, h: { fontSize: 24, fontWeight: '700', color: colors.cream }, p: { color: colors.textMuted, marginTop: 6 }, row: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 } });
