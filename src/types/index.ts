export type UserProfile = {
  uid: string;
  displayName: string;
  age: number;
  bio: string;
  location: string;
  photoURL: string;
  interests: string[];
  createdAt?: any;
  updatedAt?: any;
};

export type ChatMessage = { id: string; senderId: string; text: string; createdAt?: any };
