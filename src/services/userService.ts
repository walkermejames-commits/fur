import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { UserProfile } from '../types';

export const userService = {
  upsertProfile: async (profile: UserProfile) => {
    await setDoc(doc(db, 'users', profile.uid), { ...profile, updatedAt: serverTimestamp(), createdAt: profile.createdAt ?? serverTimestamp() }, { merge: true });
  },
  getProfile: async (uid: string) => (await getDoc(doc(db, 'users', uid))).data() as UserProfile,
  getDiscoveryUsers: async (uid: string, interests: string[]) => {
    const [usersSnap, reqSnap] = await Promise.all([getDocs(collection(db, 'users')), getDocs(collection(db, 'connectionRequests'))]);
    const blocked = new Set(reqSnap.docs
      .map((d) => d.data())
      .filter((r) => r.fromUserId === uid)
      .map((r) => r.toUserId));

    const users = usersSnap.docs
      .map((d) => d.data() as UserProfile)
      .filter((u) => u.uid !== uid && !blocked.has(u.uid));

    return users.sort((a, b) => b.interests.filter((i) => interests.includes(i)).length - a.interests.filter((i) => interests.includes(i)).length);
  },
  seedSampleUsers: async (currentUid: string) => {
    const samples: UserProfile[] = [
      { uid: 'sample1', displayName: 'Mia', age: 27, bio: 'Coffee and books explorer ☕📚', location: 'Austin', photoURL: '', interests: ['Coffee', 'Books', 'Travel', 'Art'] },
      { uid: 'sample2', displayName: 'Jordan', age: 30, bio: 'Weekend hiker and tech tinkerer', location: 'Denver', photoURL: '', interests: ['Hiking', 'Tech', 'Gaming', 'Fitness'] },
      { uid: 'sample3', displayName: 'Sam', age: 24, bio: 'Music nights and movie marathons 🎵🎬', location: 'Seattle', photoURL: '', interests: ['Music', 'Movies', 'Pets', 'Cooking'] }
    ];
    for (const p of samples) await setDoc(doc(db, 'users', p.uid), { ...p, createdAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true });
    await updateDoc(doc(db, 'users', currentUid), { updatedAt: serverTimestamp() });
  }
};
