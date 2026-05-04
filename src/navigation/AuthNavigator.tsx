import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { AuthScreen } from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => <Stack.Navigator screenOptions={{ headerShown: false }}><Stack.Screen name='Onboarding' component={OnboardingScreen} /><Stack.Screen name='Auth' component={AuthScreen} /></Stack.Navigator>;
