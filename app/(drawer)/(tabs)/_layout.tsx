import { FontAwesome, FontAwesome6, Ionicons, Feather } from '@expo/vector-icons/';

import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'CHARACTER',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#1e293b',
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: '#cbd5e1',
                    tabBarLabelStyle: { fontFamily: 'Elektra' },
                }}

            />
            <Tabs.Screen
                name="talents"
                options={{
                    title: 'TALENTS',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="sparkles" color={color} />,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#1e293b',
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: '#cbd5e1',
                    tabBarLabelStyle: { fontFamily: 'Elektra' },
                }}
            />
            <Tabs.Screen
                name="inventory"
                options={{
                    title: 'INVENTORY',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#1e293b',
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: '#cbd5e1',
                    tabBarLabelStyle: { fontFamily: 'Elektra' },
                }}
            />


            <Tabs.Screen
                name="store"
                options={{
                    title: 'STORE',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="bag-handle" color={color} />,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#1e293b',
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: '#cbd5e1',
                    tabBarLabelStyle: { fontFamily: 'Elektra' },
                }}
            />
            <Tabs.Screen
                name="obligation"
                options={{
                    title: 'OBLIGATION',
                    tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="dice" color={color} />,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#1e293b',
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: '#cbd5e1',
                    tabBarLabelStyle: { fontFamily: 'Elektra' },
                }}
            />
        </Tabs>
    );
}

