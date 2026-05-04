import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InterestChip } from './InterestChip';

export const UserCard = ({ user, shared }: any) => <View style={s.card}><View style={s.photo} /><Text style={s.h}>{user.displayName}, {user.age}</Text><Text>{user.bio}</Text><Text>Shared: {shared.join(', ') || 'Say hi and discover!'}</Text><View style={s.row}>{user.interests.map((i: string) => <InterestChip key={i} label={i} />)}</View></View>;
const s = StyleSheet.create({ card: { backgroundColor: 'white', borderRadius: 20, padding: 16, shadowOpacity: .12, shadowRadius: 10, elevation: 4 }, photo: { height: 180, backgroundColor: '#ddd', borderRadius: 16, marginBottom: 12 }, h: { fontSize: 24, fontWeight: '700' }, row: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 } });
