# Find UR (FUR)

Find what connects you. A friendship-first mobile MVP built with Expo + React Native + Firebase.

## Setup
1. `cp .env.example .env` and fill Firebase values.
2. `npm install`
3. `npx expo start`

## Implemented flow
Splash → Onboarding → Auth → Profile Setup → Discovery → Friends! → Chat.

## Notes
- Uses Firebase Auth email/password.
- Firestore collections: users, connectionRequests, friendships, chats/messages.
- Google/Apple login are placeholders.
- Notifications are stubbed for future Expo Notifications integration.
