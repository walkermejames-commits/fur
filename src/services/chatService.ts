import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const chatService = {
  createFriendship: async (a: string, b: string) => {
    const chatRef = doc(collection(db, 'chats'));
    await setDoc(chatRef, { userIds: [a, b], lastMessage: 'Say hi 👋', updatedAt: serverTimestamp() });
    const friendshipRef = doc(collection(db, 'friendships'));
    await setDoc(friendshipRef, { userIds: [a, b], createdAt: serverTimestamp(), chatId: chatRef.id });
    return { friendshipId: friendshipRef.id, chatId: chatRef.id };
  },
  listenMessages: (chatId: string, cb: (docs: any[]) => void) => onSnapshot(query(collection(db, 'chats', chatId, 'messages'), orderBy('createdAt', 'asc')), (s) => cb(s.docs.map((d) => ({ id: d.id, ...d.data() })))),
  sendMessage: async (chatId: string, senderId: string, text: string) => {
    await addDoc(collection(db, 'chats', chatId, 'messages'), { senderId, text, createdAt: serverTimestamp() });
    await setDoc(doc(db, 'chats', chatId), { lastMessage: text, updatedAt: serverTimestamp() }, { merge: true });
  },
  getUserChats: async (uid: string) => {
    const snap = await getDocs(query(collection(db, 'chats'), where('userIds', 'array-contains', uid)));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
};
