import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PantryScreen from '../screens/PantryScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tab.Screen 
        name="Pantry" 
        component={PantryScreen}
        options={{
          tabBarLabel: 'Pantry',
        }}
      />
      <Tab.Screen 
        name="Suggestions" 
        component={SuggestionsScreen}
        options={{
          tabBarLabel: 'Suggestions',
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}
