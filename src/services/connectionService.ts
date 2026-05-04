import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { db } from './firebase';
import { chatService } from './chatService';

export const connectionService = {
  act: async (fromUserId: string, toUserId: string, status: 'skipped' | 'connected') => {
    await addDoc(collection(db, 'connectionRequests'), { fromUserId, toUserId, status, createdAt: serverTimestamp() });
    if (status === 'connected') {
      const q = query(collection(db, 'connectionRequests'), where('fromUserId', '==', toUserId), where('toUserId', '==', fromUserId), where('status', '==', 'connected'));
      const snap = await getDocs(q);
      if (!snap.empty) return chatService.createFriendship(fromUserId, toUserId);
    }
    return null;
  }
};
